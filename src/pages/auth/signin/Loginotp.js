// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import vector1 from "../../../assets/images/Vector 378.svg";
// import logo from "../../../assets/images/ADEMnewLogo-01 1.svg";

// import "../styles/loginotp.scss";
// import Slideshow from "../../views/components/Slider/SliderShow";
// import { SliderData } from "../../views/components/Slider/SliderData";
// // import { LoginotpVerify } from "../../../services/loginotpverify";
// import OTPInput from "otp-input-react";
// import Language from "../../../assets/images/language.svg";
// import loginverifyServices from "../../../services/loginotpverify";
// import { Dropdown } from "react-bootstrap";

// function Loginotp() {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   // console.log(state, "manojkumar");
//   // const [otpNum1, setOtpNum1] = useState("");
//   // const [otpNum2, setOtpNum2] = useState("");
//   // const [otpNum3, setOtpNum3] = useState("");
//   // const [otpNum4, setOtpNum4] = useState("");
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const language = localStorage.getItem("lang") || "english";

//   // const otp = `${otpNum1 + otpNum2 + otpNum3 + otpNum4}`;

//   const slideChange = () => {
//     return new Promise((resolve, reject) => {
//       let datas = {
//         otp: otp,
//         phone: state.number,
//       };
//       loginverifyServices
//         .LoginotpVerify(datas)
//         .then((response) => {
//           if (response.data.message == "otp not match") {
//             setError("Otp not match");
//           } else {
//             resolve(response);
//             navigate("/account_details", { state: { id: response } });
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           reject(false);
//           // setError(err.data);
//         });
//     });
//   };

//   const englishLang = () => {
//     localStorage.setItem("lang", "english");
//     window.location.reload();
//   };

//   const tamilLang = () => {
//     localStorage.setItem("lang", "tamil");
//     window.location.reload();
//   };
//   return (
//     <div className="signIn-container">
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "98%",
//         }}
//       >
//         <div>
//           <img src={logo} className="mt-3 ms-4" />
//         </div>
//         <div>
//           <div style={{ marginTop: "30%" }}>
//             <Dropdown>
//               <Dropdown.Toggle
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "transparent",
//                 }}
//               >
//                 <img src={Language} />
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={englishLang}>
//                   {language == "english" ? "English" : "ஆங்கிலம்"}
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={tamilLang}>
//                   {language == "english" ? "Tamil" : "தமிழ்"}
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//         </div>
//       </div>
//       <div className="center-container-main">
//         <div className="center-heading">
//           <p className="header-center-content">Student</p>
//         </div>
//         <div className="center-inner-full-container">
//           <div className="leftside-container-main">
//             <div className="innerside">
//               <h1 className="signin-header">Verify</h1>

//               <p className="otp-para">Please enter the OTP sent to </p>
//               <div>
//                 <div className="otp-section">
//                   <p className="mobile-numberotp">+91 {state.number}</p>
//                   <img src={vector1} className="vector-icon" />
//                 </div>

//                 <div className="otp-main-input">
//                   {/* <input
//                   className="otp-input"
//                   onChange={(e) => setOtpNum1(e.target.value)}
//                 />
//                 <input
//                   className="otp-input"
//                   onChange={(e) => setOtpNum2(e.target.value)}
//                 />
//                 <input
//                   className="otp-input"
//                   onChange={(e) => setOtpNum3(e.target.value)}
//                 />
//                 <input
//                   className="otp-input"
//                   onChange={(e) => setOtpNum4(e.target.value)}
//                 /> */}
//                   <OTPInput
//                     className="otp-input"
//                     // style={{ width: "78%" }}
//                     // className="dta-otp"

//                     value={otp}
//                     onChange={setOtp}
//                     autoFocus
//                     OTPLength={4}
//                     otpType="number"
//                     disabled={false}
//                     // secure
//                   />
//                 </div>

//                 <p style={{ marginBottom: "0px", color: "red" }}>{error}</p>
//               </div>

//               <button
//                 className="signin-btn"
//                 type="submit"
//                 onClick={slideChange}
//               >
//                 Verify
//               </button>
//             </div>
//           </div>
//           <div className="center-line"></div>
//           <div className="rightside-container-main">
//             <Slideshow slides={SliderData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loginotp;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import vector1 from "../../../assets/images/Vector 378.svg";
import logo from "../../../assets/logo.svg";

import "../styles/loginotp.scss";
import Slideshow from "../../views/components/Slider/SliderShow";
import { SliderData } from "../../views/components/Slider/SliderData";
import OTPInput from "otp-input-react";
import Language from "../../../assets/images/language.svg";
import loginverifyServices from "../../../services/loginotpverify";
import { Dropdown } from "react-bootstrap";

function Loginotp() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const language = localStorage.getItem("lang") || "english";

  const slideChange = () => {
    return new Promise((resolve, reject) => {
      let datas = {
        otp: otp,
        phone: state.number.toString(),
      };
      loginverifyServices
        .LoginotpVerify(datas)
        .then((response) => {
          navigate("/account_details", {
            state: { id: response.data, data: datas },
          });
          resolve(response);
        })
        .catch((err) => {
          reject(false);
          setError(err.response.data.message);
        });
    });
  };

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
                <h1 className="signin-header">Verify</h1>

                <p className="otp-para">Please enter the OTP sent to </p>
                <div>
                  <div className="otp-section">
                    <p className="mobile-numberotp">+91 {state.number}</p>
                    <img src={vector1} className="vector-icon" />
                  </div>

                  <div className="otp-main-input">
                    <OTPInput
                      className="otp-input"
                      value={otp}
                      onChange={setOtp}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                      disabled={false}
                      // secure
                    />
                  </div>

                  <p style={{ marginBottom: "0px", color: "red" }}>{error}</p>
                </div>

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
  );
}

export default Loginotp;
