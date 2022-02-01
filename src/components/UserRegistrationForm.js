import React from "react";

import "../css/UserRegistrationForm.css"

class RegistrationForm extends React.Component {
    nameRef = React.createRef();
    surnameRef = React.createRef();
    emailRef = React.createRef();
    passwordRef = React.createRef();

    createUser = (event) => {
        event.preventDefault();
        const newUser = {
            name: this.nameRef.current.value,
            surname: this.surnameRef.current.value,
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value,
        }
        console.log(newUser);
        event.currentTarget.reset();
    };

    render() {
        return (                
            <div className="register">
                <form onSubmit={this.createUser}>
                    <h1>Registration Form</h1>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name" required />
                    <input name="surname" ref={this.surnameRef} type="text" placeholder="Surname" required />
                    <input name="email" ref={this.emailRef} type="email" placeholder="Email" required />
                    <input name="password" ref={this.passwordRef} type="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                </form>
            </div>                   
        );
    }
}

export default RegistrationForm;
