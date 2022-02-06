import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="card-info">
      <div className="card-img">
        <img
          src={require("../img/profile.jpg")}
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
          jooseparrak.eu
        </a>
        <div className="cta">
          <button className="btn">
            <img
              src={require("../img/email.png")}
              alt="Email"
              className="btn-icon"
            />
            Email
          </button>
          <button className="btn-alt">
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
