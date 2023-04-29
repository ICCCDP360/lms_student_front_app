import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarBottom from "../../components/sidebar/SidebarBottom";
import "./index.scss";
function MainContentPage() {
  return (
    // <>
    //   <div className="d-none d-lg-block">
    //     <div className="large-size-container"
    //     >
    //       <Sidebar />
    //       <Outlet />
    //     </div>
    //   </div>
    //   <div className="d-block d-lg-none">
    //     <div className="small-size-container">
    //       <div className="outlet-area">
    //         <Outlet />
    //       </div>
    //       <div className="sidebar-area">
    //         <SidebarBottom />
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div>
        <div style={{ display: "flex",backgroundColor:'#f5f5f5' }}>
          <div className="d-none d-md-block">
            <Sidebar />
          </div>
          <div style={{ width: "100%",backgroundColor:'#f5f5f5' }}>
            <Outlet />
          </div>
        </div>
        <div className="d-block d-md-none small-size-container">
          <div className="sidebar-area">
            <SidebarBottom />
          </div>
        </div>
      </div>
      {/* <div className="d-none d-lg-block">
        <div className="large-size-container">
          <Sidebar />
        </div>
      </div>
      <Outlet />
      <div className="d-block d-lg-none">
        <div className="small-size-container">
          <div className="sidebar-area">
            <SidebarBottom />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default MainContentPage;
