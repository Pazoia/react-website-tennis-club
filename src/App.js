import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import RegistrationForm from "./components/RegistrationForm";
import MemberList from "./components/MembersList";
import membersSample from "./members-sample";
import { sortByPoints, sortByName, sortBySurname } from "./helper-functions";
import "./css/App.css";

class App extends React.Component {
  state = {
    members: {},
    popupForm: false,
  }

  addMember = (member) => {
    const membersCopy = { ...this.state.members};
    membersCopy[`member${Date.now()}`] = member;
    const sortedByPoints = sortByPoints(membersCopy);
    this.setState({
      members: sortedByPoints,
    });
  };

  loadMembersSample = () => {
    this.setState({
      members: sortByPoints(membersSample),
    });
  };

  sortMembersByName = () => {
    const membersCopy = { ...this.state.members };
    const sortedByName = sortByName(membersCopy);
    this.setState({
      members: sortedByName,
    });
  };

  sortMembersBySurname = () => {
    const membersCopy = { ...this.state.members };
    const sortedBySurname = sortBySurname(membersCopy);
    this.setState({
      members: sortedBySurname,
    });
  };

  sortMembersByPoints = () => {
    const membersCopy = { ...this.state.members };
    const sortedByPoints = sortByPoints(membersCopy);
    this.setState({
      members: sortedByPoints,
    });
  };

  render(){
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route 
              path="/register"
              element={
                <RegistrationForm addMember={this.addMember} />
              }
            />
            <Route
              path="/members-list"
              element={<MemberList
                members={this.state.members}
                loadMembersSample={this.loadMembersSample}
                sortMembersByName={this.sortMembersByName}
                sortMembersBySurname={this.sortMembersBySurname}
                sortMembersByPoints={this.sortMembersByPoints}
              />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
