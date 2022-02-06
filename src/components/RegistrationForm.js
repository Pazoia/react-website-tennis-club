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
  }

  render() {
    return (
      <div className="registration-form-container">
        <div className="register-form">
          <form onSubmit={this.handleSubmit}> 
            <h1 className="form-title">Registration Form</h1>
            <input name="name" ref={this.nameRef} type="text" placeholder="Name" required />
            <input name="surname" ref={this.surnameRef} type="text" placeholder="Surname" required />
            <input name="email" ref={this.emailRef} type="email" placeholder="Email" required />
            <input name="password" ref={this.passwordRef} type="password" placeholder="Password" required />
            <button className="reg-btn" type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
