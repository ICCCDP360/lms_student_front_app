import React, { useState, useEffect } from "react";
import "./styles/TaskHeader.scss";
import Notification from "../../../assets/images/notify.svg";
// import logo from "../../../assets/avatar.svg";
// import popup from "../../../assets/images/popup.svg";
// import logo1 from "../../../assets/avatar.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import Profile from "../../../assets/avatar.svg";
import Language from "../../../assets/images/language.svg";
import YellowStar from "../../../assets/images/yellowStar.svg";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Dropdown } from "react-bootstrap";
import logos from "../../../assets/avatar.svg";
// import {
//   DashboardSwitchAcc,
//   profiledetails,
// } from "../../../services/dashboard";

import dashboardServices from "../../../services/dashboard";

function TaskHeader() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const language = localStorage.getItem("lang") || "en";
  // const [userDetails, SetuserDetails] = useState([]);
  // const [userOtherDetails, SetUserOtherDetails] = useState([]);

  // const other = localStorage.getItem("otherAccDetails");
  // const otherDetails = JSON.parse(other);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("userDetails")), userDetails);
    // SetuserDetails(JSON.parse(localStorage.getItem("userDetails")));
    // SetUserOtherDetails(JSON.parse(localStorage.getItem("otherAccDetails")));
  }, []);

  // const switchAccount = () => {
  //   return new Promise((resolve, reject) => {
  //     let data = {
  //       phone: JSON.parse(localStorage.getItem("parentDetails")).phone,
  //     };
  //     dashboardServices
  //       .DashboardSwitchAcc(data)
  //       .then((response) => {
  //         resolve(response);
  //         navigate("/sign_in", {
  //           state: { id: response, number: data.phone },
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         reject(false);
  //       });
  //   });
  // };
  // const name = JSON.parse(localStorage.getItem("otherAccDetails"))[0].name;
  // const id = JSON.parse(localStorage.getItem("otherAccDetails"))[0]._id;

  // const otherAcc = () => {
  //   let data = {
  //     name: name,
  //     _id: id,
  //   };

  //   navigate("/account_verify", {
  //     state: { id: data },
  //   });
  // };
  const englishLang = () => {
    localStorage.setItem("lang", "en");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };

  // const [fullData, setFullData] = useState([]);

  const profileData = () => {
    return new Promise((resolve, reject) => {
      const datas = localStorage.getItem("userid");

      dashboardServices
        .profiledetails(datas)

        .then((res) => {
          resolve(res);
          navigate("/profile", { state: { data: res } });

          // setParent(res.parentDetails);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  // const forms = userDetails?.dp;

  return (
    <>
      <div className="d-none d-sm-block">
        <div className="task-header-container">
          <div className="task-head-text">
            <p className="head-text-content">
              {language == "en" ? "Task" : "பணி"}
            </p>
          </div>
          <div
            className="rightside-taskcontainer"
            style={{ cursor: "pointer" }}
          >
            <div style={{ marginTop: "-3%" }}>
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
                    {language == "en" ? "English" : "ஆங்கிலம்"}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={tamilLang}>
                    {language == "en" ? "Tamil" : "தமிழ்"}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ marginTop: "-3%" }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                  }}
                >
                  <img src={Notification} />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: "310px", marginLeft: "-250px" }}>
                  <div
                    style={{
                      paddingLeft: "5%",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingRight: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ marginBottom: "0px" }}>
                        {language == "en"
                          ? "Content_Admin"
                          : "உள்ளடக்க_நிர்வாகம்"}
                      </p>
                      <p style={{ marginBottom: "0px" }}>01:00</p>
                    </div>
                    <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                      {language == "en"
                        ? "New videos was uploaded on th..."
                        : "அன்று புதிய வீடியோக்கள் பதிவேற்றப்பட்டன..."}
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "5px",
                      borderTop: "2px solid gray",
                      marginBottom: "5px",
                    }}
                  />
                  <div
                    style={{
                      paddingLeft: "5%",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingRight: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ marginBottom: "0px" }}>
                        {language == "en"
                          ? "Content_Admin"
                          : "உள்ளடக்க_நிர்வாகம்"}
                      </p>
                      <p style={{ marginBottom: "0px" }}>02:38</p>
                    </div>
                    <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                      {language == "en"
                        ? "New lesson was added in chemistry"
                        : "வேதியியலில் புதிய பாடம் சேர்க்கப்பட்டது"}{" "}
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "5px",
                      borderTop: "2px solid gray",
                      marginBottom: "5px",
                    }}
                  />
                  <div
                    style={{
                      paddingLeft: "5%",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingRight: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ marginBottom: "0px" }}>SPOC</p>
                      <p style={{ marginBottom: "0px" }}>12:30</p>
                    </div>
                    <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                      {language == "en"
                        ? "New videos was uploaded on th..."
                        : "அன்று புதிய வீடியோக்கள் பதிவேற்றப்பட்டன..."}
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "5px",
                      borderTop: "2px solid gray",
                      marginBottom: "5px",
                    }}
                  />
                  <p
                    onClick={() => navigate("/notification")}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#0395C4",
                      paddingLeft: "5%",
                      marginBottom: "5px",
                    }}
                  >
                    {language == "en" ? "View all" : "அனைத்தையும் காட்டு"}
                  </p>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <img src={YellowStar} />
            </div>
            {/* <p className="rank-num-text">{userDetails.points}</p> */}
            <div>
              {/* {forms ? (
                <> */}{" "}
              {/* <img
                    src={userDetails.dp}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                    }}
                    onClick={handleShow}
                  />
                </>
              ) : ( */}
              {/* <> */}
              <img
                src={logos}
                onClick={handleShow}
                style={{ width: "35px", height: "35px" }}
              />
              {/* </>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-sm-none">
        <div className="task-header-container">
          <div className="task-head-text">
            <p className="head-text-content">
              {language == "en" ? "Task" : "பணி"}
            </p>
          </div>
          <div
            className="rightside-taskcontainer"
            style={{ cursor: "pointer" }}
          >
            <div style={{ marginTop: "-3%" }}>
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
                    {language == "en" ? "en" : "ஆங்கிலம்"}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={tamilLang}>
                    {language == "en" ? "Tamil" : "தமிழ்"}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ marginTop: "-3%" }}>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                  }}
                >
                  <img src={Notification} />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: "310px", marginLeft: "-250px" }}>
                  <div
                    style={{
                      paddingLeft: "5%",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingRight: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ marginBottom: "0px" }}>
                        {language == "en"
                          ? "Content_Admin"
                          : "உள்ளடக்க_நிர்வாகம்"}
                      </p>
                      <p style={{ marginBottom: "0px" }}>01:00</p>
                    </div>
                    <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                      {language == "en"
                        ? "New videos was uploaded on th..."
                        : "அன்று புதிய வீடியோக்கள் பதிவேற்றப்பட்டன..."}
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "5px",
                      borderTop: "2px solid gray",
                      marginBottom: "5px",
                    }}
                  />
                  <div
                    style={{
                      paddingLeft: "5%",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingRight: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ marginBottom: "0px" }}>
                        {language == "en"
                          ? "Content_Admin"
                          : "உள்ளடக்க_நிர்வாகம்"}
                      </p>
                      <p style={{ marginBottom: "0px" }}>02:38</p>
                    </div>
                    <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                      {language == "en"
                        ? "New lesson was added in chemistry"
                        : "வேதியியலில் புதிய பாடம் சேர்க்கப்பட்டது"}{" "}
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "5px",
                      borderTop: "2px solid gray",
                      marginBottom: "5px",
                    }}
                  />
                  <div
                    style={{
                      paddingLeft: "5%",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingRight: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ marginBottom: "0px" }}>SPOC</p>
                      <p style={{ marginBottom: "0px" }}>12:30</p>
                    </div>
                    <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                      {language == "en"
                        ? "New videos was uploaded on th..."
                        : "அன்று புதிய வீடியோக்கள் பதிவேற்றப்பட்டன..."}
                    </p>
                  </div>
                  <hr
                    style={{
                      marginTop: "5px",
                      borderTop: "2px solid gray",
                      marginBottom: "5px",
                    }}
                  />
                  <p
                    onClick={() => navigate("/notification")}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#0395C4",
                      paddingLeft: "5%",
                      marginBottom: "5px",
                    }}
                  >
                    {language == "en" ? "View all" : "அனைத்தையும் காட்டு"}
                  </p>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <img
                src={Profile}
                onClick={handleShow}
                // style={{ width: "50%" }}
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal className="modal-first-container" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            {/* {forms ? (
              <>
                <img
                  src={userDetails.dp}
                  width="60px"
                  height="60px"
                  style={{ borderRadius: "50%" }}
                />
              </>
            ) : (
              <>
                <img src={logo} style={{ width: "20%" }} />
              </>
            )} */}
          </div>
          <h6 className="d-flex justify-content-center ">
            {/* {language == "en" ? `${userDetails.name}` : "பாலா"} */}
          </h6>
          <h6 className="d-flex justify-content-center ">
            {/* {userDetails.email} */}
          </h6>
          <Button
            onClick={profileData}
            className="modal-second-container mt-2"
            variant="outline-primary "
          >
            {language == "en" ? "View" : "பார்வை"}
          </Button>
          <hr className="horizantal-first" />

          {/* {otherDetails.map((data, index) => (
            <>
              <div
                onClick={otherAcc}
                key={index}
                className="d-flex justify-content-center modal-third-container point"
              >
                <img src={logo1} className="logo-img" />
                <h6 className="mt-2 ms-3">{data.email}</h6>
              </div>
              <hr className="horizontal-second" />
            </>
          ))} */}
          <div className="d-flex justify-content-center modal-four-container point">
            <img src={key} />
            <h6
              className="mt-2 ms-3 "
              onClick={() => navigate("/change_password")}
            >
              {language == "en"
                ? "Change password"
                : "கடவுச்சொல்லை மாற்று"}
            </h6>
          </div>
          <hr
            className="horizontal-third"
            // style={{
            //   border: "2px solid grey",
            //   marginBottom: "0%",
            //   marginTop: "0%",
            // }}
          />
          <div className="d-flex justify-content-center point">
            <img src={switchacc} />
            <h6 className="mt-2 ms-3 " 
            // onClick={switchAccount}
            >
              {language == "en" ? "Switch Account" : "கணக்கு சேர்க்க"}
            </h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TaskHeader;
