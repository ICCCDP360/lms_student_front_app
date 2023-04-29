import React from "react";
import { Outlet } from "react-router-dom";

function OutletAreaVideo() {
  return (
    <div style={{ width: "100%", backgroundColor: "#F5F5F5",paddingBottom:'2%' }}>
      <div
        style={{
          marginLeft: "2%",
          marginRight: "2%",
          backgroundColor: "white",
          width: "96%",
          // marginBottom: "2%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default OutletAreaVideo;
