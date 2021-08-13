import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
{
  /*
  use this in html
  <link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
/> */
}
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            BdatePalindrome
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://sjtgshivam.netlify.app/"
                className="nav-links"
                onClick={handleClick}
              >
                Creator's Website
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
