import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/signin.scss";
import logo from "../../../assets/logo.svg";
import Slideshow from "../../views/components/Slider/SliderShow";
import { SliderData } from "../../views/components/Slider/SliderData";
import { useFormik } from "formik";
import * as yup from "yup";
import Language from "../../../assets/images/language.svg";

import { Dropdown } from "react-bootstrap";

function Signin() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const language = localStorage.getItem("lang") || "english";

  const [selectId, setSelectId] = useState({});

  const formik = useFormik({
    initialValues: {
      list: "",
    },
    validationSchema: yup.object({
      list: yup.string().required(""),
    }),
    onSubmit: (values) => {
      slideChange(values?.list);
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

  const slideChange = () => {
    navigate("/account_verify", {
      state: { id: selectId },
    });
  };

  function handleCreatePassword(data) {
    navigate("/verify_account", { state: { id: [data], index: 0 } });
  }

  return (
    <div>
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
                  <form onSubmit={formik.handleSubmit}>
                    <h1 className="signin-header">Sign in</h1>

                    <p className="signin-number">Mobile Number</p>
                    <div className="number-container">
                      <p className="default-content">+91</p>
                      <input
                        className="input-field-number"
                        type="number"
                        value={state.number}
                      />
                    </div>
                    <div>
                      {state.id.id.map((data) => (
                        <>
                          <div className="d-flex">
                            {data.verify === true ? (
                              <input
                                onClick={() => {
                                  setSelectId(data);
                                }}
                                type="radio"
                                id={data._id}
                                name="list"
                                className="mt-4"
                                style={{ cursor: "pointer" }}
                                value={formik.values.list}
                                onChange={formik.handleChange}
                              />
                            ) : (
                              <input type="radio" disabled className="mt-4" />
                            )}
                            {}
                            <label
                              htmlFor={data._id}
                              className="signin-id mt-4"
                              style={{ cursor: "pointer" }}
                            >
                              {data.userName.charAt(0).toUpperCase() +
                                data.userName.slice(1)}
                            </label>

                            <br />
                            {data.verify === true ? null : (
                              <div className="create-password ms-3">
                                <p
                                  className="para-create"
                                  onClick={() => handleCreatePassword(data)}
                                >
                                  Create Password
                                </p>
                              </div>
                            )}
                          </div>
                        </>
                      ))}
                      {formik.errors.list ? (
                        <div className="text-danger">{formik.errors.list}</div>
                      ) : null}
                    </div>
                    {/* <p className="err-msg">{error}</p> */}
                    {Object.keys(selectId).length === 0 ? (
                      <button disabled className="signin-btn" type="submit">
                        Next
                      </button>
                    ) : (
                      <button
                        className="signin-btn"
                        type="submit"
                        onClick={slideChange}
                      >
                        Next
                      </button>
                    )}
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
  );
}

export default Signin;
