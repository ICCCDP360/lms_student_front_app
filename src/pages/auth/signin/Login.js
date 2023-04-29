import React from "react";
import logo from "../../../assets/logo.svg";
import { SliderData } from "../../views/components/Slider/SliderData";
import Slideshow from "../../views/components/Slider/SliderShow";

import "../styles/accountVerification.scss";
import Language from "../../../assets/images/language.svg";

import { Dropdown } from "react-bootstrap";

function Login() {
  const language = localStorage.getItem("lang") || "english";
  const englishLang = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };
  return (
    <div className="signIn-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "98%",
        }}
      >
        <div>
          <img src={logo} className="mt-3 ms-4" />
        </div>
        <div>
          <div style={{ marginTop: "30%" }}>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                <img src={Language} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={englishLang}>
                  {language == "english" ? "English" : "ஆங்கிலம்"}
                </Dropdown.Item>
                <Dropdown.Item onClick={tamilLang}>
                  {language == "english" ? "Tamil" : "தமிழ்"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="center-container-main">
      <div className="whole-color-border">
        <div className="center-heading">
          <p className="header-center-content">Student</p>
        </div>
        <div className="center-inner-full-container">
          <div className="leftside-container-main">
            <div className="innerside">
              <h1 className="signin-header">Sign in</h1>
              <p className="signin-username">User Name</p>
              <div className="user-container">
                <input
                  className="input-field-user"
                  type="text"
                  placeholder="Enter username"
                />
              </div>{" "}
              <p className="signin-username"> Password</p>
              <div className="user-container">
                <input
                  className="input-field-user"
                  type="password"
                  placeholder=" Password"
                />
              </div>
              <p
                className="d-flex justify-content-end"
                style={{ color: "#0395C4" }}
              >
                Forgot Password ?
              </p>
              <button className="signin-btn" type="submit">
                Sign in
              </button>
            </div>
          </div>
          <div className="center-line"></div>
          <div className="rightside-container-main">
            <Slideshow slides={SliderData} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
