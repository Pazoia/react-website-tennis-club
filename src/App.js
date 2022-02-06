import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import RegistrationForm from "./components/RegistrationForm";
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
            <Route path="/" exact element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/register" element={<RegistrationForm addMember={this.addMember} />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
