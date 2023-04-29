import React from "react";
import NotificationHeader from "./NotificationHeader";
import NotificationContent from "./NotificationContent";

function Notification() {
  return (
    <div style={{ width: "100%", backgroundColor: "#F5F5F5" }}>
      <NotificationHeader />
      <hr style={{ borderTop: "2px solid #0197c6" }} />
      <NotificationContent />
    </div>
  );
}

export default Notification;
