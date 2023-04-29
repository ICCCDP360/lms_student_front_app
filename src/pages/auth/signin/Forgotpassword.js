import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";

import "../styles/accountVerification.scss";
import Slideshow from "./../../views/components/Slider/SliderShow";
import { SliderData } from "./../../views/components/Slider/SliderData";
import { Dropdown } from "react-bootstrap";
import Language from "../../../assets/images/language.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

function Forgotpassword() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const language = localStorage.getItem("lang") || "english";

  const formik = useFormik({
    initialValues: {
      name: state.name,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
    }),
    onSubmit: () => {
      navigate("/login_otp", { state: { number: state.number } });
    },
  });
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
                <h1 className="signin-header">Forgot Password</h1>
                <form onSubmit={formik.handleSubmit}>
                  <p className="signin-username">Username</p>
                  <div className="user-container">
                    <input
                      className="input-field-user"
                      type="text"
                      // value={state.name}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // isValid={formik.touched.name && !formik.errors.name}
                      name="name"
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                  <button
                    className="signin-btn"
                    // onClick={slideChange}
                    type="submit"
                  >
                    Next
                  </button>
                </form>

                <h6
                  className="mt-5 "
                  style={{
                    color: "#0395C4",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Find Account ?
                </h6>
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

export default Forgotpassword;
