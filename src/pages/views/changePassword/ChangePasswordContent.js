import React, { useState } from "react";
import { Form } from "react-bootstrap";
import eye from "../../../assets/images/eye.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/changepasswordcontnet.scss";
// import { ChangePasswordData } from "../../../services/changepassword";
import { useFormik } from "formik";
import * as yup from "yup";
// import { ChangePasswordData } from "../../../services/changePasswordData";

import changeServices from "../../../services/changePasswordData";

function ChangePasswordContent() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordType1, setPasswordType1] = useState("password");
  const [passwordType0, setPasswordType0] = useState("password");
  const language = localStorage.getItem("lang") || "english";
  const { state } = useLocation();
  // console.log(state, "manoj");
  // const [error, setError] = useState("");

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

  const togglePassword0 = () => {
    if (passwordType0 === "password") {
      setPasswordType0("text");
      return;
    }
    setPasswordType0("password");
  };

  const passwordChange = (data) => {
    return new Promise((resolve, reject) => {
      let datas = {
        old_passcode: data.oldPassword,
        new_passcode: data.newPassword,
        confirm_passcode: data.retypePassword,
        stu_id: state.stuId,
      };

      changeServices
        .ChangePasswordData(datas)

        .then((res, result) => {
          if (result) {
            resolve(result);
          }
          if (res.status == "200") {
            navigate("/");
          }
          // console.log(res, "manoj");
        })
        .catch((err) => {
          if (err) {
            console.log(err, "err");
            reject(false);
          }
          // setError("");
        });
    });
  };

  // const [oldPassword] = useState("");
  // const [newPassword] = useState("");
  // const [retypePassword] = useState("");

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      retypePassword: "",
    },
    validationSchema: yup.object().shape({
      oldPassword: yup.string().required("password is required"),
      newPassword: yup.string().required("password is required"),
      retypePassword: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Passwords does not match")
        .required("password is required"),

      // retypePassword: yup.string().required("password must same"),
    }),
    // onSubmit,
    onSubmit: (values) => {
      const data = {
        oldPassword: values?.oldPassword,
        newPassword: values?.newPassword,
        retypePassword: values?.retypePassword,
      };
      passwordChange(data);
      // alert(JSON.stringify(values, null, 2));
    },
  });

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
    <div className="change-password-content">
      <div className="change-password-content-main">
        <div className="change-password-content-body">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <h5>
              {language == "english"
                ? "Change password"
                : "கடவுச்சொல்லை மாற்று"}
            </h5>

            <div className="row">
              <div className={language == "english" ? "col-md-4" : "col-md-6"}>
                <div className="mt-4">
                  <Form>
                    <Form.Group
                      // style={
                      //   language == "english" ? { width: "40%" } : { width: "60%" }
                      // }
                      className="mb-3"
                    >
                      <Form.Label className="form-label">
                        {language == "english"
                          ? "Old Password"
                          : "பழைய கடவுச்சொல்"}
                      </Form.Label>
                      <div className="password-feild">
                        <Form.Control
                          className="form-control"
                          type={passwordType0}
                          name="oldPassword"
                          value={formik.values.oldPassword}
                          onChange={formik.handleChange}
                          placeholder={
                            language == "english"
                              ? "Enter your old password"
                              : "உங்கள் பழைய கடவுச்சொல்லை உள்ளிடவும்"
                          }
                        />
                        <img
                          src={eye}
                          style={{ marginLeft: "-8%" }}
                          onClick={togglePassword0}
                        />
                      </div>
                      {formik.errors.oldPassword ? (
                        <div className="text-danger">
                          {formik.errors.oldPassword}
                        </div>
                      ) : null}
                      {/* <p className="text-danger">{error}</p> */}
                    </Form.Group>
                  </Form>
                </div>
                <div className="mt-3">
                  <Form>
                    <Form.Group
                      // style={
                      //   language == "english" ? { width: "40%" } : { width: "60%" }
                      // }
                      className="mb-3"
                    >
                      <Form.Label className="form-lebel1">
                        {language == "english"
                          ? "New Password"
                          : "புதிய கடவுச்சொல்"}
                      </Form.Label>
                      <div className="password-feild">
                        <Form.Control
                          className="password-form-control"
                          name="newPassword"
                          value={formik.values.newPassword}
                          onChange={formik.handleChange}
                          placeholder={
                            language == "english"
                              ? "Enter your new password"
                              : "உங்கள் புதிய கடவுச்சொல்லை உள்ளிடவும்"
                          }
                          type={passwordType}
                          // onChange={handlePasswordChange}
                          // name="password"
                          class="form-control"
                        />
                        <img
                          src={eye}
                          style={{ marginLeft: "-8%" }}
                          onClick={togglePassword}
                        />
                      </div>
                      {formik.errors.newPassword ? (
                        <div className="text-danger">
                          {formik.errors.newPassword}
                        </div>
                      ) : null}
                      {/* <p className="text-danger">{error}</p> */}
                    </Form.Group>
                  </Form>
                </div>
                <div className="mt-3">
                  <Form>
                    <Form.Group
                    // style={
                    //   language == "english" ? { width: "" } : { width: "60%" }
                    // }
                    >
                      <Form.Label className="password-retype">
                        {language == "english"
                          ? "Retype New Password"
                          : "புதிய கடவுச்சொல் மீண்டும் தட்டச்சு"}{" "}
                      </Form.Label>
                      <div className="password-new">
                        <Form.Control
                          className="password-form"
                          // style={{ width: "50%" }}
                          // type="password"
                          value={formik.values.retypePassword}
                          onChange={formik.handleChange}
                          placeholder={
                            language == "english"
                              ? "Retype your new password"
                              : "உங்கள் புதிய கடவுச்சொல்லை மீண்டும் தட்டச்சு செய்யவும்"
                          }
                          type={passwordType1}
                          name="retypePassword"
                          class="form-control"
                        />
                        <img
                          src={eye}
                          onClick={togglePassword1}
                          className="password-img"
                        />
                      </div>
                      {formik.errors.retypePassword ? (
                        <div className="text-danger">
                          {formik.errors.retypePassword}
                        </div>
                      ) : null}
                      {/* <p className="text-danger">{error}</p> */}
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>

            <div className="mt-4 s-flex">
              <button className="password-change-btn" onClick={passwordChange}>
                {language == "english" ? "Change" : "மாற்றவும்"}
              </button>
              <button className="password-cancel">
                {language == "english" ? "Cancel" : "ரத்து செய்"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordContent;
