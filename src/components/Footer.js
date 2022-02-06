import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://twitter.com/jooseparrak"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img src={require("../img/twitter.png")} alt="Twitter" width="32px" />
      </a>
      <a
        href="https://facebook.com/joosep.arrak"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img src={require("../img/facebook.png")} alt="Facebook" width="32px" />
      </a>
      <a
        href="https://instagram.com/jooseparrak"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img
          src={require("../img/instagram.png")}
          alt="Instagram"
          width="32px"
        />
      </a>
    </div>
  );
}

export default Footer;
