import React from "react";
import "./styles/Course.scss";
import TaskHeader from "./TaskHeader";
import { Outlet } from "react-router";

function Course() {
  return (
    <div className="task-full-container">
      <TaskHeader />
      <hr className="divider-line" />
      <Outlet />
    </div>
  );
}

export default Course;
