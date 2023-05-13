import React from "react";
import "./styles/notificationContent.scss";

function NotificationContent() {
  const language = localStorage.getItem("lang") || "en";

  return (
    <div className="notification-full-container">
      <div className="notification-inner-container">
        <div className="notify-container">
          <h5 className="notify-name">
            {language == "en" ? "Content Admin" : "உள்ளடக்க நிர்வாகி"}
          </h5>
          <h5 className="notify-content">
            {language == "en"
              ? "New videos was uploaded on thermodynamics for class 6."
              : "6 ஆம் வகுப்புக்கான தெர்மோடைனமிக்ஸில் புதிய வீடியோக்கள் பதிவேற்றப்பட்டன."}{" "}
          </h5>
          <h5 className="notify-time">01:00</h5>
        </div>
        <div className="notify-container">
          <h5 className="notify-name">
            {language == "en" ? "Content Admin" : "உள்ளடக்க நிர்வாகி"}
          </h5>
          <h5 className="notify-content">
            {language == "en"
              ? "New lesson was added in chemistry."
              : "வேதியியலில் புதிய பாடம் சேர்க்கப்பட்டது."}{" "}
          </h5>
          <h5 className="notify-time"> 03:32</h5>
        </div>
        <div className="notify-container">
          <h5 className="notify-name"> SPOC</h5>
          <h5 className="notify-content">
            {language == "en"
              ? "Your question on thermodynamics was answered."
              : "தெர்மோடைனமிக்ஸ் பற்றிய உங்கள் கேள்விக்கு பதில் கிடைத்தது."}
          </h5>
          <h5 className="notify-time"> 12:28</h5>
        </div>
        <div className="notify-container">
          <h5 className="notify-name">SPOC</h5>
          <h5 className="notify-content">
            {language == "en"
              ? "Your question on thermodynamics was answered."
              : "தெர்மோடைனமிக்ஸ் பற்றிய உங்கள் கேள்விக்கு பதில் கிடைத்தது."}
          </h5>
          <h5 className="notify-time"> 04:08</h5>
        </div>
      </div>
    </div>
  );
}

export default NotificationContent;
