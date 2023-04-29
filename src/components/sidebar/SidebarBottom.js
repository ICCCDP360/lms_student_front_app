import React from "react";
import Dashboard from "../../assets/images/dashboardBlack.svg";
import Course from "../../assets/images/contentBlack.svg";
import Qna from "../../assets/images/forumBlack.svg";
import { useNavigate } from "react-router-dom";
import "./styles/SidebarBottom.scss";

function SidebarBottom() {
  const navigate = useNavigate();
  return (
    <div className="side-bot">
      <div className="side-bot-main">
        <div
          className={
            location.pathname === "/dashboard"
              ? "single-sidecontent-bottom-active"
              : "single-sidecontent-bottom"
          }
          onClick={() => navigate("/dashboard")}
          style={{ textAlign: "center" }}
        >
          <img src={Dashboard} />
          <p style={{ marginBottom: "0px" }}>Dashboard</p>
        </div>
        <div
          className={
            location.pathname === "/content"
              ? "single-sidecontent-bottom-active"
              : "single-sidecontent-bottom"
          }
          onClick={() => navigate("/content")}
          style={{ textAlign: "center" }}
        >
          <img src={Course} />
          <p style={{ marginBottom: "0px" }}>Course</p>
        </div>
        <div
          className={
            location.pathname === "/forum"
              ? "single-sidecontent-bottom-active"
              : "single-sidecontent-bottom"
          }
          onClick={() => navigate("/forum")}
          style={{ textAlign: "center" }}
        >
          <img src={Qna} />
          <p style={{ marginBottom: "0px" }}>Q&A</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarBottom;
