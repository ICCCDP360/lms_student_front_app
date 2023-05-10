import React from "react";
import { Route, Routes } from "react-router";
import Course from "./Course";
import MyTaskContinuePage from "./MyTaskContinuePage";
import TaskPage from "./TaskPage";

function MainCourse() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Course />}>
          <Route path="/" element={<TaskPage />} />
          <Route path="/task" element={<MyTaskContinuePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainCourse;
