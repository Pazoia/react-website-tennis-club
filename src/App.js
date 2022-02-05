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
    );
  }
}

export default App;
