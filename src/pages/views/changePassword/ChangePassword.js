import React from "react";
import ChangePasswordHeader from "./ChangePasswordHeader";
import ChangePasswordContent from "./ChangePasswordContent";
import "./styles/changepassword.scss";

function ChangePassword() {
  return (
    <div className="change-password">
      <ChangePasswordHeader />
      <hr className="change-password-hr" />
      <ChangePasswordContent />
    </div>
  );
}

export default ChangePassword;
