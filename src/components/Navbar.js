import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Button from './Button';
import "../css/Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [button, setButton] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  const closeMobileMenu = () => {
    setToggle(false)
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener("resize", showButton);

  return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src="images/golden-sands-logo.png" alt="logo" />
                </Link>
                <div className="menu-icon" onClick={handleToggle}>
                    <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={toggle ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-links-mobile" onClick={closeMobileMenu}>
                      Register Here
                    </Link>
                  </li>
                </ul>
                {button && <Button link="/register" buttonStyle="btn--outline">Register Here</Button>}
            </div>
        </nav>
      </>
  );
}

export default Navbar;
