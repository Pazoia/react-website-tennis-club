import React from 'react';

class Member extends React.Component {
  render() {
    
    const { name, surname, points } = this.props.details;
    
    return (
      <li className="member">
        <p>{name}</p>
        <p>{surname}</p>
        <p>{points}</p>
      </li>
    );
  }
}

export default Member;
