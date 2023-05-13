import React, { useState, useEffect } from "react";
import "./styles/Sidebar.scss";
import dashboardWhite from "../../assets/images/dashboardWhite.svg";
import dashboardBlack from "../../assets/images/dashboardBlack.svg";
import contentWhite from "../../assets/images/contentWhite.svg";
import contentBlack from "../../assets/images/contentBlack.svg";
import forumWhite from "../../assets/images/forumWhite.svg";
import forumBlack from "../../assets/images/forumBlack.svg";
import LogoutIcon from "../../assets/images/redlogOut.svg";
import RightArrow from "../../assets/images/rightArrow.svg";
import Article from '../../assets/images/article.svg'
import Testspace from '../../assets/images/testspace.svg'
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

import logo1 from "../../assets/images/New_cdp logo-01.png";
// import { Sidebarlog } from "../../services/sidebar";
import sidebarlogServices from "../../services/sidebar";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  // const [stepCount, setStepCount] = useState(0);
  // const [taskRem, setTaskRem] = useState([]);
  // const { state } = useLocation();
  const stepCount = 0;
  const language = localStorage.getItem("lang") || "en";
  const [slide, setSlide] = useState(true);

  const [schoolDetails, SetschoolDetails] = useState([]);

  useEffect(() => {
    SetschoolDetails(localStorage.getItem("schoolDetails"));
  }, []);

  const dashboardPage = () => {
    navigate("/dashboard");
  };

  const contentPage = () => {
    navigate("/content");
  };

  const forumPage = () => {
    navigate("/forum");
  };

  const logouts = () => {
    return new Promise((resolve, reject) => {
      let data = {
        // phone: JSON.parse(localStorage.getItem("userDetails")).phone,
        _id: localStorage.getItem("id"),
      };

      sidebarlogServices
        .Sidebarlog(data)
        .then((response) => {
          // localStorage.setItem("Acc");
          resolve(response);
          localStorage.removeItem('access_tokens')
          localStorage.removeItem('id')
          localStorage.removeItem('school_id')
          localStorage.removeItem('std')
    navigate("/")
          // navigate("/", { state: { id: response } });
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
    // localStorage.removeItem('accessToken')
    // navigate("/")
  };

  const forms = schoolDetails?.logo;
  return (
    <>
      {/* {taskRem.slice(0, 1).map((item, index) => {
        return ( */}
      {slide ? (
        <div className="sidebar-full-container">
          <div>
            <div
              className="header-logo-container"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
            >
              {/* <img
                src={logo}
                width="100px"
                height="100px"
                style={{ borderRadius: "50%" }}
                className="header-logo "
              /> */}
              {forms ? (
                <>
                  <img
                    src={logo}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "50%" }}
                    className="header-logo "
                  />
                </>
              ) : (
                <>
                  <img
                  src={logo}
                    // src="https://www.shutterstock.com/image-vector/education-logo-design-templates-institutes-260nw-1725604474.jpg"
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "50%" }}
                  />{" "}
                </>
              )}
            </div>
            <div className="header-divider-container">
              <hr className="divider-line" />
            </div>
            <div className="sidecontent-container">
              <div
                className={
                  location.pathname === "/dashboard"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={dashboardPage}
              >
                {stepCount === 1 ? (
                  <img src={dashboardWhite} />
                ) : (
                  <img src={dashboardBlack} />
                )}
                <p className="sidetext-content">
                  {/* {item.lang.dashboard} */}
                  {language == "en" ? "Dashboard" : "தகவல்பலகை"}
                </p>
              </div>
              <div
                className={
                  location.pathname === "/content"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={contentPage}
              >
                {stepCount === 1 ? (
                  <img src={contentWhite} />
                ) : (
                  <img src={contentBlack} />
                )}
                <p className="sidetext-content">
                  {/* {item.lang.course} */}
                  {language == "en" ? "Course" : "பாடநெறி"}
                </p>
              </div>
              <div
                className={
                  location.pathname === "/forum"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={forumPage}
              >
                {stepCount === 1 ? (
                  <img src={forumWhite} />
                ) : (
                  <img src={forumBlack} />
                )}
                <p className="sidetext-content">
                  {/* {item.lang.qna} */}
                  {language == "en" ? "Q&A" : "கேள்வி பதில்"}
                </p>
              </div>
              <div className="single-sidecontent"
                // className={
                //   location.pathname === "/forum"
                //     ? "single-sidecontent-active"
                //     : "single-sidecontent"
                // }
                // onClick={forumPage}
              >
                {stepCount === 1 ? (
                  <img src={Testspace} />
                ) : (
                  <img src={Testspace} />
                )}
                <p className="sidetext-content">
                Test Space
                </p>
              </div>
              <div className="single-sidecontent"
                // className={
                //   location.pathname === "/forum"
                //     ? "single-sidecontent-active"
                //     : "single-sidecontent"
                // }
                // onClick={forumPage}
              >
                {stepCount === 1 ? (
                  <img src={Article} />
                ) : (
                  <img src={Article} />
                )}
                <p className="sidetext-content">
                 News & Articles
                </p>
              </div>
            </div>
            <div className="end-divider-container mt-4">
              <hr className="end-divider-line" />
            </div>
          </div>
          <div className="logout-main-container">
            <button className="logout-btn">
              <div className="logout-btn-container">
                <img
                  src={LogoutIcon}
                  className={
                    language == "en" ? "logout-img" : "logout-img-tamil"
                  }
                />
                <p
                  className={
                    language == "en" ? "logout-text" : "logout-text-tamil"
                  }
                  onClick={logouts}
                >
                  {language == "en" ? "Logout" : "வெளியேறு"}
                </p>
              </div>
            </button>
            <div className="slide-btn-container">
              <button onClick={() => setSlide(false)} className="slide-btn">
                <img src={RightArrow} className="slide-img" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-full-container-sm">
          <div>
            <div
              className="header-logo-container"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
            >
              {/* <img src={schoolDetails.logo} className="header-logo" /> */}
              <img src={logo1} className="header-logo" />
            </div>
            <div className="header-divider-container">
              <hr className="divider-line" />
            </div>
            <div className="sidecontent-container">
              <div
                className={
                  location.pathname === "/dashboard"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={dashboardPage}
              >
                {stepCount === 1 ? (
                  <img src={dashboardWhite} />
                ) : (
                  <img src={dashboardBlack} />
                )}
              </div>
              <div
                className={
                  location.pathname === "/content"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={contentPage}
              >
                {stepCount === 1 ? (
                  <img src={contentWhite} />
                ) : (
                  <img src={contentBlack} />
                )}
              </div>
              <div
                className={
                  location.pathname === "/forum"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={forumPage}
              >
                {stepCount === 1 ? (
                  <img src={forumWhite} />
                ) : (
                  <img src={forumBlack} />
                )}
              </div>
            </div>
            <div className="end-divider-container">
              <hr className="end-divider-line" />
            </div>
          </div>
          <div className="logout-main-container">
            <button className="logout-btn">
              <div onClick={logouts} className="logout-btn-container">
                <img
                  src={LogoutIcon}
                  className={
                    language == "en" ? "logout-img" : "logout-img-tamil"
                  }
                />
              </div>
            </button>
            <div className="slide-btn-container">
              <button onClick={() => setSlide(true)} className="slide-btn">
                <img src={RightArrow} className="slide-img" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ); */}
      {/* })} */}
    </>
  );
}

export default Sidebar;
