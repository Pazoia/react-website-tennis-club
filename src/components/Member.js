import React from 'react';

class Member extends React.Component {
  render() {
    
    const { name, surname, points } = this.props.details;
    
    return (
      <li className="member">
        <p className="member-detail">{name}</p>
        <p className="member-detail">{surname}</p>
        <p >{points}</p>
      </li>
    );
  }
}

export default Member;
