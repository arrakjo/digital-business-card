import React from "react";
import "./Info.css";

function emailButton() {
  window.location.href = "mailto:jooseparrak@gmail.com";
}

function linkedinButton() {
  window.open("https://www.linkedin.com/in/jooseparrak/", "_blank");
}

function Info() {
  return (
    <div className="card-info">
      <div className="card-img">
        <img
          src={require("../img/profile-alt.png")}
          alt="Profile"
          className="profile"
        />
      </div>
      <div className="card-details">
        <h1>Joosep Arrak</h1>
        <p className="description">Frontend Developer</p>
        <a
          href="https://jooseparrak.eu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/arrakjo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <div className="cta">
          <button className="btn" onClick={emailButton}>
            <img
              src={require("../img/email.png")}
              alt="Email"
              className="btn-icon"
            />
            Email
          </button>
          <button className="btn-alt" onClick={linkedinButton}>
            <img
              src={require("../img/linkedin-alt.png")}
              alt="Email"
              className="btn-icon"
            />
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
