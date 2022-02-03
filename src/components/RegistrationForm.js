import React from "react";

import "../css/RegistrationForm.css"

class RegistrationForm extends React.Component {
    nameRef = React.createRef();
    surnameRef = React.createRef();
    emailRef = React.createRef();
    passwordRef = React.createRef();

    createMember = (event) => {
        event.preventDefault();

        const newMember = {
            name: this.nameRef.current.value,
            surname: this.surnameRef.current.value,
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value,
        }

        this.props.addMember(newMember);

        console.log(newMember);
        event.currentTarget.reset();
    };

    handleSubmit = (event) => {
        this.createMember(event);
        // this.props.history.push("/members");
    }

    render() {
        return (this.props.trigger) ? (
            <div className="register">
                <form onSubmit={this.handleSubmit}> 
                    <h1>Registration Form</h1>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name" required />
                    <input name="surname" ref={this.surnameRef} type="text" placeholder="Surname" required />
                    <input name="email" ref={this.emailRef} type="email" placeholder="Email" required />
                    <input name="password" ref={this.passwordRef} type="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                    {this.props.children}
                </form>
            </div>                   
        ) : "";
    }
}

export default RegistrationForm;
