import React from "react";

function videoPlayer() {
  return (
    <div className="container">
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src="https://iframe.mediadelivery.net/embed/119704/3a6adaab-98ff-4bff-acc4-5b067be76386?autoplay=true"
          loading="lazy"
          style={{
            border: "none",
            position: "absolute",
            top: "0",
            height: "100%",
            width: "100%",
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default videoPlayer;
