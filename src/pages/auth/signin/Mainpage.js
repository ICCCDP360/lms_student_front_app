import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/mainpage.scss";
import logo from "../../../assets/logo.svg";
import Slideshow from "../../views/components/Slider/SliderShow";
import { SliderData } from "../../views/components/Slider/SliderData";
import { useFormik } from "formik";
import * as yup from "yup";
import Language from "../../../assets/images/language.svg";

import { Dropdown } from "react-bootstrap";
import checkServices from "../../../services/checkaccount";
import loginverifyServices from "../../../services/login";
import { useEffect } from "react";

function Mainpage() {
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "english";

  const [error, setError] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    loginverifyServices.useAuth().then((result) => {
      if (result) {
        setAuth(result);
      }
    });
  }, [auth]);

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: yup.object().shape({
      number: yup.number().required("Mobile Number Is Required"),
    }),
    onSubmit: (values) => {
      slideChange(values?.number);
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

  const slideChange = (values) => {
    return new Promise((resolve) => {
      let datas = {
        phone: values.toString(),
      };
      checkServices
        .checkaccount(datas)
        .then((response, result) => {
          if (result) {
            resolve(result.id);
          }
          if (response) {
            navigate("/sign_in", {
              state: { id: { id: response.data }, number: values },
            });
          }
        })
        .catch((err) => {
          if (err.response.data == "User Not Found") {
            setError("Account not found");
          } else if (err.response.data.verify == false) {
            navigate("/verification_page", {
              state: { number: values },
            });
            console.log("err");
          }
        });
    });
  };

  const CheckAuth = localStorage.getItem("accessToken");
  if (CheckAuth) {
    return <Navigate to="/dashboard" />;
  } else {
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
                  <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <h1 className="signin-header">Sign in</h1>
                    {process.env.BackendUrl}

                    <p className="signin-number">Mobile Number</p>

                    <div className="number-container">
                      <p className="default-content">+91</p>
                      <input
                        // onChange={(e) => setNumber(e.target.value)}
                        className="input-field-number "
                        type="number"
                        placeholder="Mobile number"
                        name="number"
                        // minLength={9}
                        // maxLength="10"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.values.number == "" ? (
                      <>
                        {formik.touched.number && formik.errors.number ? (
                          <div className="text-danger">
                            {formik.errors.number}
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <p className="err-msg">{error}</p>
                      </>
                    )}

                    {/* <p className="err-msg">{error}</p> */}

                    <button
                      className="signin-btn"
                      // onClick={slideChange}
                      type="submit"
                    >
                      Next
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
}
//  else if (auth) {
//   return <Navigate to="/dashboard" />;
// }
// }

export default Mainpage;
