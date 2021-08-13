import React from "react";
import { FaGithub, FaMedium, FaLinkedinIn, FaBriefcase } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="footerLink">
          <a href="https://github.com/SJTGSHIVAM">
            <FaGithub />
          </a>
        </li>
        <li className="footerLink">
          <a href="https://sjtgshivam.medium.com">
            <FaMedium />
          </a>
        </li>
        <li className="footerLink">
          <a href="https://www.linkedin.com/in/shivam-pandey-766524161">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="footerLink">
          <a href="https://sjtgshivam.netlify.app/">
            <FaBriefcase />
          </a>
        </li>
      </ul>

      <div className="legacyText">© 2021 | Shivam Pandey</div>
    </footer>
  );
};
export default Footer;
