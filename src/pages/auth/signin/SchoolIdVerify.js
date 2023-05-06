import React, { useState } from 'react'
import { SliderData } from '../../views/components/Slider/SliderData'
import Slideshow from '../../views/components/Slider/SliderShow'
import Language from "../../../assets/images/language.svg";
import logo from "../../../assets/logo.svg";
import { Dropdown } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import schoolIdService from '../../../services/schoolId'


function SchoolIdVerify() {
  const language = localStorage.getItem("lang") || "english";
  const [error, setError] = useState("");

  const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: yup.object().shape({
      number: yup.string().required("School Id Is Required"),
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

  const slideChange = (data) =>{
    return new Promise((resolve, reject) => {
        let trigger = {
            schoolId: data,
        };
        console.log(trigger, "triggger");
        schoolIdService
          .SchoolIdpage(trigger)
          .then((res) => {
            navigate('/number_verify')
            localStorage.setItem('school_id',res.schoolId)
          })
          .catch((err) => {
            if (err.response.data == "School Not Found") {
                setError("Account not found");
              }
              reject(false);
          });
      });
  }

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

                    <p className="signin-number">School Id</p>

                    <div className="number-container">
                      {/* <p className="default-content">+91</p> */}
                      <input
                        // onChange={(e) => setNumber(e.target.value)}
                        className="input-field-number "
                        style={{padding:'2%'}}
                        type="text"
                        placeholder="School Id"
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
                    //   onClick={slideChange}
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
  )
}

export default SchoolIdVerify