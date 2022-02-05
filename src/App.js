import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./css/App.css";

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
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact />
          </Routes>
        </Router>
      </>
        // <h1 className="golden-sands">Golden Sands</h1>
        // <h2 className="tennis-club">Tennis Club</h2>
        // <button onClick={() => this.setState({
        //   popupForm: true,
        // })}>
        //   Register
        // </button>
        // <RegistrationForm 
        //   trigger={this.state.popupForm}
        //   addMember={this.addMember}
        // />
    );
  }
}

export default App;
