import React from "react";
import { useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import "../styles/VideoPlayer.scss";

function VideoPlayer({ videoData }) {
  const [videoDivision, setVideoDicvision] = useState(0);
  const [html, setHtml] = useState("");
  console.log(videoData,'videoData');

  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <div>
      <hr className="underline-video" />
      {/* <div className="video-slide-container"> */}
      {/* <video
          className="videoplayer-video"
          src="https://adem-file-collections.s3.ap-south-1.amazonaws.com/Nutrition+in+animals+-+Animated.mp4"
          controls="controls"
          // autoPlay="true"
        /> */}
      <div className="container">
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          {
            videoData==''?(<>Loading</>):(
              <iframe
            // src="https://iframe.mediadelivery.net/embed/119704/3a6adaab-98ff-4bff-acc4-5b067be76386?autoplay=true"
            src={videoData}
            loading="lazy"
            style={{
              border: "none",
              position: "absolute",
              top: "0",
              height: "80%",
              width: "80%",
              marginLeft: "10%",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
            )
          }
          
        </div>
      </div>
      {/* </div> */}
      <hr className="underline-video" />
      <div className="video-base-container">
        <p
          onClick={() => setVideoDicvision(0)}
          className={videoDivision === 0 ? "selectVideoPlay" : "dailyVideoPlay"}
        >
          Video Content
        </p>
        <p
          onClick={() => setVideoDicvision(1)}
          className={videoDivision === 1 ? "selectVideoPlay" : "dailyVideoPlay"}
        >
          FAQs
        </p>
        <p
          onClick={() => setVideoDicvision(2)}
          className={videoDivision === 2 ? "selectVideoPlay" : "dailyVideoPlay"}
        >
          Q&A
        </p>
      </div>
      <div className="video-descrip-container">
        {videoDivision === 0 ? (
          <>
            <p className="descrip-name">Description</p>
            <p className="descrip-content">
              Nutrition in animals is as important as it is for plants. Plants
              prepare their own food by the process of photosynthesis but
              animals cannot prepare their own food, hence they need to depend
              on plants or other animals for their food.
              <br />
              Animals derive their nutrition either by eating plants directly
              (herbivores), or indirectly by eating animals which have consumed
              plants (carnivores). Some animals feed on both plants and animals;
              these animals are termed omnivores. All organisms require food for
              their survival and growth.
              <br />
              Food has different components, called nutrients, like
              carbohydrates, fats, minerals, proteins, and vitamins, which are
              required for the maintenance of the body. These components are
              complex and cannot be used directly, so they are broken down into
              simpler components by the process of digestion.
            </p>
          </>
        ) : null}
        {videoDivision === 1 ? (
          <>
            <div>
              <p className="second-video-content">
                1. The process by which digested food enters the walls of blood
                vessels is known as
              </p>
              <p className="second-video-subcontent">
                It is the process that mainly takes place in a long, highly
                coiled, narrow tube of the digestive system (Or) The third
                sequence of nutrition in humans
              </p>
              <p className="second-video-content">
                2. Which of the following regions of the alimentary canal of man
                does not secrete a digestive enzyme?
              </p>
              <p className="second-video-subcontent">
                It is also called the food pipe
              </p>
              <p className="second-video-content">
                3. The process of transporting absorbed substances from the
                small intestine to various parts of the body to build complex
                compounds such as protein is known as
              </p>
              <p className="second-video-subcontent">
                It is the process by which nutrients are transformed into
                biological tissues and fluids after being digested in the
                intestine (Or) The fourth sequence of nutrition in humans
              </p>
            </div>
          </>
        ) : null}
        {videoDivision === 2 ? (
          <div>
            <p className="details-head">Details</p>
            <div className="email-container">
              <DefaultEditor value={html} onChange={onChange} />
            </div>
            <button className="ask-btn">Ask</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default VideoPlayer;
