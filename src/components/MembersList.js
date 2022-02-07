import React from 'react';

import Member from "./Member";
import "../css/MembersList.css";

class MembersList extends React.Component {
  render() {
    return (
      <div className="members-list-container">
        <div className="club-members">
          <h1>Club Members</h1>
            <ul className="header">
              <li>Name</li>
              <li>Surname</li>
              <li>Points</li>
            </ul>
            <ul className="Member">
              {
                Object.keys(this.props.members).map((key) => (
                  <Member
                    key={key} details={this.props.members[key]}
                  />
                ))
              }
            </ul>
            <ul className="header">
              <button className="sort-buttons" onClick={this.props.sortMembersByName}>sort by name</button>
              <button className="sort-buttons" onClick={this.props.sortMembersBySurname}>sort by surname</button>
              <button className="sort-buttons" onClick={this.props.sortMembersByPoints}>sort by points</button>
            </ul>
          </div>
          <button className="samples-load" type="submit" onClick={this.props.loadMembersSample}>
            Load Members Sample
          </button>
      </div>
    );
  }
}

export default MembersList;
