import React, { useState } from "react";
import Notification from "../../../assets/images/notify.svg";
import Language from "../../../assets/images/language.svg";
import YellowStar from "../../../assets/images/yellowStar.svg";
import logo1 from "../../../assets/avatar.svg";
import logo from "../../../assets/avatar.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "./styles/Profilepage.scss";
import dashboardServices from "../../../services/dashboard";

function ProfileHeader() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "en";

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const other = localStorage.getItem("otherAccDetails");
  const otherDetails = other;

  const user = localStorage.getItem("userDetails");
  const userDetail = user;
  console.log(userDetail, "user");

  const switchAccount = () => {
    return new Promise((resolve, reject) => {
      let data = {
        phone: localStorage.getItem("parentDetails").phone,
      };
      dashboardServices
        .DashboardSwitchAcc(data)
        .then((response) => {
          resolve(response);
          navigate("/sign_in", {
            state: { id: response, number: data.phone },
          });
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const name = localStorage.getItem("otherAccDetails")[0].name;
  const id = localStorage.getItem("otherAccDetails")[0]._id;

  const otherAcc = () => {
    let data = {
      name: name,
      _id: id,
    };

    navigate("/account_verify", {
      state: { id: data },
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

  const image = "";
  return (
    <div className="profile-header-main-container">
      <div className="task-header-container">
        <div className="task-head-text">
          <p className="profile-lang-1">
            {language == "en" ? "Profile" : "சுயவிவரம்"}
          </p>
        </div>
        <div className="rightside-taskcontainer" style={{ cursor: "pointer" }}>
          <div className="dropdown-container-1">
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
          <div className="dropdown-container-1">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                <img src={Notification} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-container-2">
                <div className="drop-submenu">
                  <div className="d-flex justify-content-between">
                    <p className="eng-content">
                      {language == "en"
                        ? "Content_Admin"
                        : "உள்ளடக்க_நிர்வாகம்"}
                    </p>
                    <p className="eng-content">01:00</p>
                  </div>
                  <p className="eng-content-2">
                    {language == "en"
                      ? "New videos was uploaded on th..."
                      : "அன்று புதிய வீடியோக்கள் பதிவேற்றப்பட்டன..."}
                  </p>
                </div>
                <hr className="hr-container" />
                <div className="container-main-1">
                  <div className="d-flex justify-content-between">
                    <p className="eng-content">
                      {language == "en"
                        ? "Content_Admin"
                        : "உள்ளடக்க_நிர்வாகம்"}
                    </p>
                    <p className="eng-content">02:38</p>
                  </div>
                  <p className="eng-content-2">
                    {language == "en"
                      ? "New lesson was added in chemistry"
                      : "வேதியியலில் புதிய பாடம் சேர்க்கப்பட்டது"}{" "}
                  </p>
                </div>
                <hr className="hr-container" />
                <div className="container-main-1">
                  <div className="d-flex justify-content-between">
                    <p className="eng-content">SPOC</p>
                    <p className="eng-content">12:30</p>
                  </div>
                  <p className="eng-content-2">
                    {language == "en"
                      ? "New videos was uploaded on th..."
                      : "அன்று புதிய வீடியோக்கள் பதிவேற்றப்பட்டன..."}
                  </p>
                </div>
                <hr className="hr-container" />
                <p
                  className="eng-view-container"
                  onClick={() => navigate("/notification")}
                >
                  {language == "en" ? "View all" : "அனைத்தையும் காட்டு"}
                </p>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <img src={YellowStar} className="star" />
          </div>
          <p className="rank-num-text">{userDetail.points}</p>
          <div>
            {image ? (
              <>
                <img
                  src={userDetail.dp}
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "50%" }}
                  onClick={handleShow}
                />
              </>
            ) : (
              <>
                <img
                  src={logo}
                  style={{ width: "35px", height: "35px" }}
                  // className="user-details-img-dp"
                  onClick={handleShow}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Modal className="modal-first-container" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            {image ? (
              <>
                <img
                  src={userDetail.dp}
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "50%" }}
                />
              </>
            ) : (
              <>
                <img
                  src={logo}
                  style={{ width: "20%" }}
                  // className="user-details-img-dp"
                  onClick={handleShow}
                />
              </>
            )}
          </div>
          <h6 className="d-flex justify-content-center mt-2">
            {language == "en" ? `${userDetail.name}` : "பாலா"}
          </h6>
          <h6 className="d-flex justify-content-center ">{userDetail.email}</h6>
          {/* <Button
            onClick={() => navigate("/profile", { state: { data: fullData } })}
            className="modal-second-container mt-2"
            variant="outline-primary "
          >
            {language == "en" ? "View" : "பார்வை"}
          </Button> */}
          {/* <hr className="horizantal-first" /> */}

          {/* <div className="d-flex justify-content-center modal-third-container point">
            // <img src={logo1} className="logo-img" />
            <h6 className="mt-2 ms-3">Kalai@gmail.com</h6>
          </div> */}
          <hr className="horizontal-second" />
          {otherDetails.map((data, index) => (
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
          ))}
          {/* <hr className="horizontal-second" /> */}
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
          <hr className="horizontal-third" />
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

export default ProfileHeader;
