import React from "react";
import "./styles/footer.scss";
import CDPLogo from "../../assets/images/cdplogo.png";
function Footer() {
  return (
    <div
      className="footer-main-container"
      // style={{
      //   backgroundColor: "white",
      //   width: "100%",
      //   textAlign: "center",
      //   padding: "0.1%",
      //   // paddingBottom: "1%",
      //   fontSize: "13px",
      //   fontWeight: "600",
      //   position: "fixed",
      //   bottom: "1px",
      //   // color: "gray",
      // }}
    >
      <a
        style={{ textDecoration: "none" }}
        href="https://cdp360.com/"
        target={"_blank"}
        rel="noreferrer"
      >
        <img
          src={CDPLogo}
          style={{ width: "3%", marginRight: "5px", marginLeft: "3px" }}
        />
        Powered by CDP360 Technologies Pvt Ltd
      </a>
    </div>
  );
}

export default Footer;
