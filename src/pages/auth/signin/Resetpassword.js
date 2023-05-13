import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { SliderData } from "../../views/components/Slider/SliderData";
import Slideshow from "../../views/components/Slider/SliderShow";
// import { useNavigate } from "react-router-dom";
import eye from "../../../assets/images/eye.svg";
import "../styles/accountVerification.scss";

import Language from "../../../assets/images/language.svg";

import { Dropdown } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

function Resetpassword() {
  // const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  // const [passwordInput, setPasswordInput] = useState("");
  const language = localStorage.getItem("lang") || "en";

  // const handlePasswordChange = (evnt) => {
  //   setPasswordInput(evnt.target.value);
  // };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [passwordType1, setPasswordType1] = useState("password");
  // const [passwordInput1, setPasswordInput1] = useState("");

  const formik = useFormik({
    initialValues: {
      newpassword: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      newpassword: Yup.string().required("newpassword is required "),
      confirmpassword: Yup.string().required("confirmpassword is required"),
    }),
    onSubmit: (values) => {
      // var newpassword = values.newpassword;
      // var confirmpassword = values.confirmpassword;
      // const datas={

      // }
      console.log(values, "hh");
    },
  });

  const enLang = () => {
    localStorage.setItem("lang", "en");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };
  // const handlePasswordChange1 = (evnt) => {
  //   setPasswordInput1(evnt.target.value);
  // };
  const togglePassword1 = () => {
    if (passwordType1 === "password") {
      setPasswordType1("text");
      return;
    }
    setPasswordType1("password");
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
      <div className="center-container-main">
        <div className="whole-color-border">
          <div className="center-heading">
            <p className="header-center-content">Student</p>
          </div>
          <div className="center-inner-full-container">
            <div className="leftside-container-main">
              <div className="innerside">
                <h1 className="signin-header">Reset Password</h1>
                <form>
                  <p className="signin-username">New Password</p>
                  <div className="user-container">
                    <input
                      className="input-field-user"
                      type={passwordType}
                      placeholder="Enter new password"
                      // onChange={handlePasswordChange}
                      onChange={formik.handleChange}
                      // value={passwordInput}
                      onBlur={formik.handleBlur}
                      value={formik.values.newpassword}
                      name="newpassword"
                      // isValid={
                      //   formik.touched.newpassword && !formik.errors.newpassword
                      // }
                    />
                    <img
                      src={eye}
                      style={{ marginLeft: "45%" }}
                      onClick={togglePassword}
                    />
                  </div>{" "}
                  {formik.touched.newpassword && formik.errors.newpassword ? (
                    <div className="text-danger">
                      {formik.errors.newpassword}
                    </div>
                  ) : null}
                  <p className="signin-username">Confirm Password</p>
                  <div className="user-container">
                    <input
                      className="input-field-user"
                      // type="text"
                      placeholder="Confirm Password"
                      type={passwordType1}
                      // onChange={handlePasswordChange1}
                      value={formik.values.confirmpassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={passwordInput1}
                      name="confirmpassword"
                    />
                    <img
                      src={eye}
                      style={{ marginLeft: "45%" }}
                      onClick={togglePassword1}
                    />
                  </div>
                  {formik.touched.confirmpassword &&
                  formik.errors.confirmpassword ? (
                    <div className="text-danger">
                      {formik.errors.confirmpassword}
                    </div>
                  ) : null}
                  <button className="signin-btn" type="submit">
                    set
                  </button>
                </form>
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

export default Resetpassword;
