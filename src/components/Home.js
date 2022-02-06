import React from 'react';

import Button from './Button';
import "../css/Home.css"

function Home() {
  return (
    <div className="home-container">
      <h1>GOLDEN SANDS</h1>
      <p>Your tennis club at the beach!</p>
      <div className="join-us-btn">
        <Button
          link="/register"
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Join Us Today
        </Button>
      </div>
    </div>
  );
}

export default Home;
