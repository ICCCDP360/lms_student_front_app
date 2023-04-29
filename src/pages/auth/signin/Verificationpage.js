import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { SliderData } from "../../views/components/Slider/SliderData";
import Slideshow from "../../views/components/Slider/SliderShow";
import Language from "../../../assets/images/language.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-bootstrap";
function Verificationpage() {
  const navigate = useNavigate();
  const [states] = useState(false);
  const { state } = useLocation();
  // console.log(state,'manoj');
  const language = localStorage.getItem("lang") || "english";

  const slideChange = () => {
    navigate("/login_otp", { state:  state  });
  };
  const formik = useFormik({
    initialValues: {
      number: state.number,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(" Number is required"),
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
      {states ? (
        <div>
          {" "}
          <div>
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
                      <form onSubmit={formik.handleSubmit}>
                        <p className="signin-number">Mobile Number</p>
                        <div className="number-container">
                          <p className="default-content">+91</p>
                          <div
                            className="mt-2 ms-2"
                            style={{
                              borderRight: "2px solid black",
                              height: "20px",
                            }}
                          ></div>
                          <input
                            className="input-field-number"
                            type="number"
                            name="number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={formik.values.number}
                          />
                        </div>
                        {formik.touched.number && formik.errors.number ? (
                          <div className="text-danger">
                            {formik.errors.number}
                          </div>
                        ) : null}
                        <p className="mobile-number" style={{ color: "red" }}>
                          This mobile number is unregistered. Please contact
                          your Student.
                        </p>

                        <button
                          className="signin-btn"
                          onClick={slideChange}
                        >
                          Verify
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
        </div>
      ) : (
        <div>
          <div>
            <img src={logo} className="mt-3 ms-4" />
            <div className="register-para"></div>
            <div className="center-container-main">
              <div className="center-heading">
                <p className="header-center-content">Student</p>
              </div>
              <div className="center-inner-full-container">
                <div className="leftside-container-main">
                  <div className="innerside">
                    <h1 className="signin-header">Sign in</h1>

                    <p className="signin-number">Mobile Number</p>
                    <div className="number-container">
                      <p className="default-content">+91</p>
                      <div
                        className="mt-2 ms-2"
                        style={{
                          borderRight: "2px solid black",
                          height: "20px",
                        }}
                      ></div>
                      <input
                        className="input-field-number"
                        type="number"
                        name="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.number}
                        // value={state.number}
                      />
                    </div>
                    {formik.touched.number && formik.errors.number ? (
                      <div className="text-danger">{formik.errors.number}</div>
                    ) : null}
                    <p className="mobile-number" style={{ color: "red" }}>
                      This mobile number is unverified. Please verify.
                    </p>

                    <button
                      className="signin-btn"
                      type="submit"
                      onClick={slideChange}
                    >
                      Verify
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
      )}
    </div>
  );
}

export default Verificationpage;
