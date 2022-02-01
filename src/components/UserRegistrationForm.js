import React from "react";

import "../css/UserRegistrationForm.css"

class RegistrationForm extends React.Component {
    render() {
        return (                
            <div className="register">
                <form>
                    <h1>Registration Form</h1>
                    <input name="name" type="text" placeholder="Name" required="" />
                    <input name="surname" type="text" placeholder="Surname" required="" />
                    <input name="email" type="email" placeholder="Email" required="" />
                    <input name="password" type="password" placeholder="Password" required="" />
                    <input name="password" type="password" placeholder="Confirm Password" required="" />
                    <button type="submit">Register</button>
                </form>
            </div>                   
        );
    }
}

export default RegistrationForm;
