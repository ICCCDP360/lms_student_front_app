import React from "react";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./profileHeader";
import "./styles/Profilepage.scss";

function ProfileMain() {
  return (
    <div className="main-container-profilemain">
      <ProfileHeader />
      <hr className="hr-main-sub-container" />
      <ProfileContent />
    </div>
  );
}

export default ProfileMain;
