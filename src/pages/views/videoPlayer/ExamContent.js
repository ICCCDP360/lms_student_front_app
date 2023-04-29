import React from "react";
import { Route, Routes } from "react-router";
import PdfPage from "./PdfPage";
import OutletAreaVideo from "./OutletAreaVideo";
import VideoPlayer from "./videoPlayer";
import { useLocation } from "react-router-dom";

function ExamContent() {
  // const [searchParams] = useSearchParams();
  // const ctrlPage = searchParams.get("id");
  // const dataPage = searchParams.get("data");
  const { state } = useLocation();

  console.log(state, "67");
  return (
    <Routes>
      <Route path="/" element={<OutletAreaVideo />}>
        <Route
          path="/"
          element={
            <VideoPlayer
              ctrlPage={state.id}
              dataPage={state.data}
              title={state.title}
              user={state.user}
            />
          }
        />
        <Route path="/pdf" element={<PdfPage />} />
      </Route>
    </Routes>
  );
}

export default ExamContent;
