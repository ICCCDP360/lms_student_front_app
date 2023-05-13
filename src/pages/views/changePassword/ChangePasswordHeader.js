import React, { useState, useEffect } from "react";
import Profile from "../../../assets/images/profileImg.svg";
import Notification from "../../../assets/images/notify.svg";
import Language from "../../../assets/images/language.svg";
import YellowStar from "../../../assets/images/yellowStar.svg";
import popup from "../../../assets/images/popup.svg";
import logo1 from "../../../assets/images/Ellipse 157.svg";
// import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import { useNavigate } from "react-router";
import { Button, Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
// import {
//   DashboardSwitchAcc,
//   profiledetails,
// } from "../../../services/dashboard";
import dashboardServices from "../../../services/dashboard";

function ChangePasswordHeader() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "en";
  const user = localStorage.getItem("userDetails");
  const userDetails = (user);

  const other = localStorage.getItem("otherAccDetails");
  const otherDetails = (other);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    const datas = localStorage.getItem("userid");
    dashboardServices.profiledetails((datas)).then((res) => {
      setFullData(res.data);
    });
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const switchAccount = () => {
    // console.log((localStorage.getItem("parentDetails")), "parents");
    let data = {
      phone: (localStorage.getItem("parentDetails")).phone,
    };
    dashboardServices
      .DashboardSwitchAcc(data)
      .then((response) => {
        // localStorage.setItem("Acc");
        navigate("/sign_in", {
          state: { id: response.data, number: data.phone },
        });
      })
      .catch((err) => {
        if (err.response.data.message == "not verify") {
          navigate("/verification_page", { state: {} });
        } else if (err.response.data.message == "account not found") {
          // if (number == "") {
          //   setError("Enter phone number");
          // } else {
          //   setError("Account not found");
          // }
        }
      });
  };

  const enLang = () => {
    localStorage.setItem("lang", "en");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };
  return (
    <div>
      <div className="task-header-container">
        <div className="task-head-text">
          <p
            style={{
              marginBottom: "0px",
              marginTop: "10%",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {language == "en" ? "Change password" : "கடவுச்சொல்லை மாற்று"}
          </p>
        </div>
        <div className="rightside-taskcontainer" style={{ cursor: "pointer" }}>
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
                <Dropdown.Item onClick={enLang}>
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
                {/* <Dropdown.Item onClick={() => setLanguage("en")}>
                      en
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setLanguage("tamil")}>
                      Tamil
                    </Dropdown.Item> */}
                <div
                  style={{
                    paddingLeft: "5%",
                    fontSize: "18px",
                    fontWeight: "600",
                    paddingRight: "5%",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                    style={{ display: "flex", justifyContent: "space-between" }}
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
          <p className="rank-num-text">115</p>
          <div>
            <img src={Profile} onClick={handleShow} />
          </div>
        </div>
      </div>
      <Modal
        className="modal-first-container"
        // style={{ marginLeft: "79%", width: "256px", marginTop: "3%" }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <img src={popup} />
          </div>
          <h6 className="d-flex justify-content-center ">
            {userDetails.name}
            {/* {language == "en" ? "Bala" : "பாலா"} */}
          </h6>
          <h6 className="d-flex justify-content-center ">
            {userDetails.email}
          </h6>
          <Button
            onClick={() => navigate("/profile", { state: { data: fullData } })}
            className="modal-second-container mt-2"
            // style={{ marginLeft: "38%" }}
            // className="mt-2"
            variant="outline-primary "
          >
            {language == "en" ? "View" : "பார்வை"}
          </Button>
          <hr className="horizantal-first" />
          {otherDetails.map((data, index) => (
            <>
              <div
                onClick={switchAccount}
                key={index}
                className="d-flex justify-content-center modal-third-container point"
              >
                <img src={logo1} className="logo-img" />
                <h6 className="mt-2 ms-3">{data.email}</h6>
              </div>
              <hr className="horizontal-second" />
            </>
          ))}

          {/* <hr className="horizontal-second" /> */}
          {/* <div className="d-flex justify-content-center modal-four-container point">
            <img src={key} />
            <h6
              className="mt-2 ms-3 "
              onClick={() => navigate("/change_password")}
            >
              {language == "en"
                ? "Change password"
                : "கடவுச்சொல்லை மாற்று"}
            </h6>
          </div> */}
          {/* <hr
            className="horizontal-third"
            // style={{
            //   border: "2px solid grey",
            //   marginBottom: "0%",
            //   marginTop: "0%",
            // }}
          /> */}
          <div className="d-flex justify-content-center point">
            <img src={switchacc} />
            <h6 className="mt-2 ms-3 " onClick={switchAccount}>
              {language == "en" ? "Switch Account" : "கணக்கு சேர்க்க"}
            </h6>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ChangePasswordHeader;
