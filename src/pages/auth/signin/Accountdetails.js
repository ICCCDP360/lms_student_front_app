import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import vector1 from "../../../assets/images/Ellipse 157.svg";
import logo from "../../../assets/logo.svg";

import "../styles/accountdetails.scss";
import Language from "../../../assets/images/language.svg";
// import accountServices from "../../../services/accountdetails";

// import { Accountdeatailsdata } from "../../../services/accountdetails";
import { Dropdown } from "react-bootstrap";

function Accountdetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state,'manoj');
  const [selectDetails, setSelectDetails] = useState(0);

  const language = localStorage.getItem("lang") || "english";

  // console.log(selectDetails);

  const englishLang = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };

  const slideChange = () => {
    // return new Promise((resolve, reject) => {
    // let datas = {
    //   stu_id: state[selectDetails],
    // };
    // console.log(state,'manoj');
    // accountServices.Accountdeatailsdata(datas).then(() => {
      // if (result) {
      //   resolve(result.id);
      // }
      navigate("/verify_account", {
        state: state[selectDetails],
        // {
          // id: response.data,
          // overall: state?.id,
          // index: selectDetails,
        // },
      });
      // .catch((err) => {
      //   if (err) {
      //     console.log(err);
      //     reject(false);
      //   }
      // });
    // });
    // });
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
      <div className="center-container-pass">
        <div className="verify-container">
          <h4>Create Password</h4>
          {state.map((data, index) => (
            <div
              key={index}
              onClick={() => selectedId(index)}
              className={
                index === selectDetails
                  ? "verify-subcontainer"
                  : "verify-subcontainer1"
              }
            >
              {console.log(data,'kumar')}
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
