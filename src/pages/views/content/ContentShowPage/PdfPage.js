import React from "react";

function PdfPage({pdfData}) {
  return (
    <div style={{ textAlign: "center", paddingBottom: "5%" }}>
      <iframe src={pdfData} style={{ width: "90%", height: "100vh" }} />
    </div>
  );
}

export default PdfPage;
