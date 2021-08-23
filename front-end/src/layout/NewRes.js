import React, {useEffect, useState} from "react";
import {Link, useParams, useHistory, useRouteMatch} from "react-router-dom";

function NewRes(){
    const history = useHistory()
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    useEffect(() => {
        async function addRes() {
            const result = await fetch("https://radiant-wave-64212.herokuapp.com/")
        }
    })
    return(
        <div>
            <form class="form-group">
            <h4>First Name</h4>
            <input name="first_name" ></input>
            <h4>Last Name</h4>
            <input name="last_name" ></input>
            <h4>Phone Number</h4>
            <input name="phone_number" ></input>
            <h4>Date of reservation</h4>
            <input type ="date" name="reservation_date"></input>
            <h4>Time of reservation</h4>
            <input type="time" name="reservation_time"></input>
            <h4>Number of people in the party</h4>
            <input name="people" ></input>
            <div>
            <input type="submit" class="btn btn-success" value="Submit" onClick={handleSubmit}></input>
            </div>
            <div>
            <input type="submit" class="btn btn-outline-danger" value="Cancel" onClick={() => history.push("/")}></input>
            </div>
            </form>
        </div>
    )
}

export default NewRes