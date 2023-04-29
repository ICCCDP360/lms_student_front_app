import React from "react";

function PdfPage({ dataPageValue }) {
  return (
    <div style={{ textAlign: "center", paddingBottom: "15%" }}>
      <iframe src={dataPageValue} style={{ width: "90%", height: "100vh" }} />
    </div>
  );
}

export default PdfPage;
