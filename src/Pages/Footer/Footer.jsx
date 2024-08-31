import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div id="made">
        <p>Made with </p>
        <i className="ri-heart-2-fill"></i>
      </div>
      <div id="self">
        <i className="ri-copyright-line"> </i>
        <a
            href="https://www.linkedin.com/in/sushant-dwivedi-"
            target="_blank"
            rel="noopener noreferrer"
          > Sushant Dwivedi </a>
          
      </div>
    </div>
  );
}

export default Footer;
