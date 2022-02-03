import React from "react";

import RegistrationForm from "./components/RegistrationForm";

class App extends React.Component {
  state = {
    members: {},
    popupForm: false,
  }


  addMember = (member) => {
    const membersCopy = { ...this.state.members};
    membersCopy[`member${Date.now()}`] = member;
    this.setState({
      members: membersCopy,
    });
  }

  render(){
    return (
      <div>
        <h1 className="golden-sands">Golden Sands</h1>
        <h2 className="tennis-club">Tennis Club</h2>
        <button onClick={() => this.setState({
          popupForm: true,
        })}>
          Register
        </button>
        <RegistrationForm 
          trigger={this.state.popupForm}
          addMember={this.addMember}
        />
      </div>
    );
  }
}

export default App;
