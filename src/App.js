import React from "react";

import RegistrationForm from "./components/RegistrationForm";
import "./css/App.css"

class App extends React.Component {
  state = {
    members: {},
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
      <RegistrationForm 
        addMember={this.addMember}
      />
    );
  }
}

export default App;
