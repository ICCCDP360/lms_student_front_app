import React, { useState, useEffect } from "react";
import Profile from "../../../assets/images/profileImg.svg";
import Notification from "../../../assets/images/showNotify.svg";
import Language from "../../../assets/images/language.svg";
import YellowStar from "../../../assets/images/yellowStar.svg";
// import popup from "../../../assets/images/popup.svg";
import logo1 from "../../../assets/images/Ellipse 157.svg";
import key from "../../../assets/images/key.svg";
import switchacc from "../../../assets/images/switch.svg";
import { useNavigate } from "react-router";
import { Button, Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
// import {
//   DashboardSwitchAcc,
//   profiledetails,
// } from "../../../services/dashboard";
import dashboardServices from "../../../services/dashboard";
function NotificationHeader() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const language = localStorage.getItem("lang") || "english";
  const [userDetails, setUserDetails] = useState([]);
  const [fullData, setFullData] = useState([]);

  const other = localStorage.getItem("otherAccDetails");
  const otherDetails = JSON.parse(other);

  useEffect(() => {
    const datas = localStorage.getItem("userid");
    dashboardServices.profiledetails(JSON.parse(datas)).then((res) => {
      setFullData(res.data);
    });
  }, []);

  useEffect(() => {
    // console.log(
    //   JSON.parse(localStorage.getItem("userDetails")),
    //   userDetails
    //   // userOtherdetails,
    // );
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
    // SetUserOtherDetails(JSON.parse(localStorage.getItem("otherAccDetails")));
  }, []);

  const switchAccount = () => {
    // console.log(JSON.parse(localStorage.getItem("parentDetails")), "parents");
    let data = {
      phone: JSON.parse(localStorage.getItem("parentDetails")).phone,
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
  const name = JSON.parse(localStorage.getItem("otherAccDetails"))[0].name;
  const id = JSON.parse(localStorage.getItem("otherAccDetails"))[0]._id;

  const otherAcc = () => {
    let data = {
      name: name,
      _id: id,
    };

    navigate("/account_verify", {
      state: { id: data },
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
    <>
      <div className="d-none d-sm-block">
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
              {language == "english" ? "Notification" : "அறிவிப்பு"}
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
                    {language == "english" ? "English" : "ஆங்கிலம்"}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={tamilLang}>
                    {language == "english" ? "Tamil" : "தமிழ்"}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <img src={Notification} />
            </div>
            <div>
              <img src={YellowStar} />
            </div>
            <p className="rank-num-text">{userDetails.points}</p>
            <div>
              <img
                src={Profile}
                style={{ width: "36px", height: "35px", borderRadius: "50%" }}
                onClick={handleShow}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-sm-none">
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
              {language == "english" ? "Notification" : "அறிவிப்பு"}
            </p>
          </div>
          <div
            className="rightside-taskcontainer"
            style={{ cursor: "pointer" }}
          >
            <div>
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
            <div>
              <img src={Notification} style={{ marginTop: "10px" }} />
            </div>
            <div>
              <img
                src={userDetails.dp}
                style={{ width: "36px", height: "35px", borderRadius: "50%" }}
                onClick={handleShow}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal className="modal-first-container" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <img
              src={Profile}
              style={{ width: "48px", height: "48px", borderRadius: "50%" }}
            />
          </div>
          <h6 className="d-flex justify-content-center ">{userDetails.name}</h6>
          {/* <h6 className="d-flex justify-content-center ">
            {language == "english" ? `${userDetails.name}` : "பாலா"}
          </h6> */}
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
            {language == "english" ? "View" : "பார்வை"}
          </Button>
          <hr className="horizantal-first" />
          {/* <div className="d-flex justify-content-center modal-third-container point">
            <img src={logo1} className="logo-img" />
            <h6 className="mt-2 ms-3">Kalai@gmail.com</h6>
          </div> */}
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
              {language == "english"
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
            <h6 className="mt-2 ms-3 " onClick={switchAccount}>
              {language == "english" ? "Switch Account" : "கணக்கு சேர்க்க"}
            </h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NotificationHeader;
