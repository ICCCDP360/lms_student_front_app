import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import vector1 from "../../../assets/images/Ellipse 157.svg";
import logo from "../../../assets/logo.svg";

import "../styles/accountdetails.scss";
import Language from "../../../assets/images/language.svg";
import { Dropdown } from "react-bootstrap";

function Accountdetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectDetails, setSelectDetails] = useState(0);
  const language = localStorage.getItem("lang") || "en";

  const enLang = () => {
    localStorage.setItem("lang", "en");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };

  const slideChange = () => {
    navigate("/verify_account", {
      state: { id: state.id[selectDetails], data: state.data, datas: state },
    });
  };

  const selectedId = (index) => {
    setSelectDetails(index);
  };
  useEffect(() => {}, [selectDetails]);
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
                <Dropdown.Item onClick={enLang}>
                  {language == "en" ? "en" : "ஆங்கிலம்"}
                </Dropdown.Item>
                <Dropdown.Item onClick={tamilLang}>
                  {language == "en" ? "Tamil" : "தமிழ்"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="center-container-pass">
        <div className="verify-container">
          <h4>Create Password</h4>
          {state.id.map((data, index) => (
            <div
              key={index}
              onClick={() => selectedId(index)}
              className={
                index === selectDetails
                  ? "verify-subcontainer"
                  : "verify-subcontainer1"
              }
            >
              <img src={vector1} />
              <p
                className={
                  index === selectDetails ? "para-section" : "para-section1"
                }
              >
                {data.userName.charAt(0).toUpperCase() + data.userName.slice(1)}
              </p>
            </div>
          ))}

          <button className="signin-btn-verify" onClick={slideChange}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accountdetails;
