import React, { useEffect } from "react";
import VideoSelect from "../../../assets/images/videoselect.svg";
import VideoComplete from "../../../assets/images/videocomplete.svg";
import PdfUnSelect from "../../../assets/images/pdfunselect.svg";
import PdfSelect from "../../../assets/images/pdfselect.svg";
import PdfComplete from "../../../assets/images/pdfcomplete.svg";
import PractiseUnSelect from "../../../assets/images/practiseunselect.svg";
import PractiseSelect from "../../../assets/images/practiseselect.svg";
import PractiseComplete from "../../../assets/images/practisecomplete.svg";
import AssestUnSelect from "../../../assets/images/assestunselect.svg";
import AssestSelect from "../../../assets/images/assestselect.svg";
import { useState } from "react";
import "./styles/videoplayer.scss";
import { DefaultEditor } from "react-simple-wysiwyg";
import Practise from "./Practise";
import AssesmentPage from "./AssesmentPage";
import PdfPage from "./PdfPage";
import assesemnetServices from "../../../services/assesmentContent";
// import { pdfdata, videodata } from "../../../services/videosection";
import videoServices from "../../../services/videosection";
import practiseServices from "../../../services/PractiseContent";
function VideoPlayer({ ctrlPage, dataPage, title, user }) {
  const [topicChanges, setTopicChanges] = useState(ctrlPage);
  const [dataPageValue, setDataPageValue] = useState(dataPage);
  const [titleValue, setTitleValue] = useState(title);

  const [videoPlay, setVideoPlay] = useState(dataPageValue);
  const [videoDivision, setVideoDicvision] = useState(0);
  const [videoImg, setVideoImg] = useState(VideoSelect);
  const [pdfImg, setPdfImg] = useState(PdfUnSelect);
  const [practiseImg, setPractiseImg] = useState(PractiseUnSelect);
  const [assestImg, setAssestImg] = useState(AssestUnSelect);
  const [html, setHtml] = useState("");
  const language = localStorage.getItem("lang") || "en";

  console.log(titleValue, "hhhhh");

  function onChange(e) {
    setHtml(e.target.value);
  }

  useEffect(() => {
    if (dataPageValue == 1) {
      setVideoPlay(
        "https://adem-file-collections.s3.ap-south-1.amazonaws.com/Nutrition+in+animals+-+Animated.mp4"
      );
    } else if (dataPageValue == 2) {
      setVideoPlay(
        "https://adem-file-collections.s3.ap-south-1.amazonaws.com/Nutrition+in+Animals+-+First+Half+-.mp4"
      );
    } else if (dataPageValue == 3) {
      setVideoPlay(
        "https://adem-file-collections.s3.ap-south-1.amazonaws.com/Nutrition+in+Animals+-+Second+half.mp4"
      );
    } else if (dataPageValue == 4) {
      setVideoPlay(
        "https://adem-file-collections.s3.ap-south-1.amazonaws.com/%E0%AE%B5%E0%AE%BF%E0%AE%B2%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AE%BF%E0%AE%A9%E0%AF%8D+%E0%AE%8A%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%9A%E0%AF%8D%E0%AE%9A%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81.mp4"
      );
    }
  }, []);

  useEffect(() => {
    if (topicChanges === "video") {
      setVideoImg(VideoSelect);
      setPdfImg(PdfUnSelect);
      setPractiseImg(PractiseUnSelect);
      setAssestImg(AssestUnSelect);
    } else if (topicChanges === "pdf") {
      setVideoImg(VideoComplete);
      setPdfImg(PdfSelect);
      setAssestImg(AssestUnSelect);
      setPractiseImg(PractiseUnSelect);
    } else if (topicChanges === "practise") {
      setVideoImg(VideoComplete);
      setPdfImg(PdfComplete);
      setPractiseImg(PractiseSelect);
      setAssestImg(AssestUnSelect);
    } else if (topicChanges === "assesment") {
      setVideoImg(VideoComplete);
      setPdfImg(PdfComplete);
      setPractiseImg(PractiseComplete);
      setAssestImg(AssestSelect);
    }
  }, [topicChanges]);

  const VideoPlay = () => {
    setTopicChanges("video");
    videoServices.videodata(user).then((res) => {
      // console.log(res.data.videos, "manoj");
      res.data.videos.map((data) => setDataPageValue(data.videoUrl));
    });
  };

  const PDFPage = () => {
    setTopicChanges("pdf");
    videoServices.pdfdata(user).then((res) => {
      res.data.map((data) => setDataPageValue(data.pdfUrl));
    });
  };

  const PractisePage = () => {
    return new Promise((resolve, reject) => {
      setTopicChanges("practise");
      practiseServices
        .PracticeContent(user)
        .then((res) => {
          resolve(res);
          res.data.map((data) => {
            setDataPageValue(data.practiceQuestions);
            setTitleValue(data.practiceTitle);
          });

          // console.log(res.data, "hhhh");
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const AssesmentPages = () => {
    return new Promise((resolve, reject) => {
      setTopicChanges("assesment");
      assesemnetServices.AssesmentContent(user).then((res) => {
        resolve(res);
        res.data
          .map((data) => {
            setDataPageValue(data.assessmentQuestions);
            setTitleValue(data.assessmentTitle);
          })
          .catch((err) => {
            console.log(err);
            reject(false);
          });
      });
    });
  };

  return (
    <div>
      <div className="video-full-container">
        <p className="video-header">
          {title}
          {/* {language == "en" ? "Digestive System" : "செரிமான அமைப்பு"} */}
        </p>
        <div className="top-header-img-container">
          <div className="header-img-inside-container">
            <div onClick={VideoPlay} className="img-header-container">
              <img src={videoImg} />
              <p>{language == "en" ? "Video" : "வீடியோ"}</p>
            </div>
            <div
              onClick={PDFPage}
              // onClick={() => setTopicChanges("pdf")}
              className="img-header-container"
            >
              <img src={pdfImg} />
              <p>{language == "en" ? "PDF" : "PDF"}</p>
            </div>
            <div
              onClick={PractisePage}
              // className={topicChanges===0?"disableImg":"ableImg"}
              // onClick={() => setTopicChanges("practise")}
              className="img-header-container"
            >
              <img src={practiseImg} />
              <p>{language == "en" ? "Practice" : "பயிற்சி"}</p>
            </div>
            <div
              onClick={AssesmentPages}
              // className={topicChanges===0&&1?"disableImg":"ableImg"}
              // onClick={() => setTopicChanges("assesment")}
              className="img-header-container"
            >
              <img src={assestImg} />
              <p>{language == "en" ? "Assessment" : "மதிப்பீடு"}</p>
            </div>
          </div>
        </div>
      </div>
      {topicChanges === "video" ? (
        <>
          <div className="video-slide-container">
            <hr className="underline-video" />
            {/* <div style={{ textAlign: "center" }}>
              <iframe
                src={`https://player.vimeo.com/video/788538463?h=a6c49d9a13&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                width="640"
                height="340"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                title="vlc-record-2023-01-10-12h00m46s-videoplayback.mp4-.mp4"
              ></iframe>
            </div> */}
            {/* <VideoPage/> */}
            {/* <iframe src="https://drive.google.com/file/d/1yk-EdbAAMM-bNsyZMgfChJnxklF7GOda/view" width="640" height="480" allow="autoplay"></iframe> */}
            <video
              className="videoplayer-video"
              src={videoPlay}
              controls="controls"
              // autoPlay="true"
            />
            <hr className="end-underline-video" />
          </div>
          <div className="video-base-container">
            <p
              onClick={() => setVideoDicvision(0)}
              className={
                videoDivision === 0 ? "selectVideoPlay" : "dailyVideoPlay"
              }
            >
              {language == "en" ? "Video Content" : "வீடியோ உள்ளடக்கம்"}
            </p>
            <p
              onClick={() => setVideoDicvision(1)}
              className={
                videoDivision === 1 ? "selectVideoPlay" : "dailyVideoPlay"
              }
            >
              {language == "en" ? "FAQs" : "FAQs"}
            </p>
            <p
              onClick={() => setVideoDicvision(2)}
              className={
                videoDivision === 2 ? "selectVideoPlay" : "dailyVideoPlay"
              }
            >
              {language == "en" ? "Q&A" : "கேள்வி பதில்"}
            </p>
          </div>
          <div className="video-descrip-container">
            {videoDivision === 0 ? (
              <>
                <p className="descrip-name">
                  {language == "en" ? "Description" : "விளக்கம்"}
                </p>
                {language == "en" ? (
                  <p className="descrip-content">
                    Nutrition in animals is as important as it is for plants.
                    Plants prepare their own food by the process of
                    photosynthesis but animals cannot prepare their own food,
                    hence they need to depend on plants or other animals for
                    their food.
                    <br />
                    Animals derive their nutrition either by eating plants
                    directly (herbivores), or indirectly by eating animals which
                    have consumed plants (carnivores). Some animals feed on both
                    plants and animals; these animals are termed omnivores. All
                    organisms require food for their survival and growth.
                    <br />
                    Food has different components, called nutrients, like
                    carbohydrates, fats, minerals, proteins, and vitamins, which
                    are required for the maintenance of the body. These
                    components are complex and cannot be used directly, so they
                    are broken down into simpler components by the process of
                    digestion.
                  </p>
                ) : (
                  <p className="descrip-content">
                    தாவரங்களுக்கு எவ்வளவு முக்கியமோ அதே அளவு விலங்குகளுக்கும்
                    ஊட்டச்சத்து முக்கியம். தாவரங்கள் ஒளிச்சேர்க்கையின் மூலம்
                    தமக்கான உணவைத் தயாரிக்கின்றன ஆனால் விலங்குகள் தங்கள் சொந்த
                    உணவைத் தயாரிக்க முடியாது, எனவே அவை தேவைப்படுகின்றன உணவுக்காக
                    தாவரங்கள் அல்லது பிற விலங்குகளை சார்ந்துள்ளது.
                    <br />
                    விலங்குகள் தங்கள் ஊட்டச்சத்தை தாவரங்களை சாப்பிடுவதன் மூலம்
                    பெறுகின்றன நேரடியாக (தாவர உண்ணிகள்), அல்லது மறைமுகமாக
                    விலங்குகளை உண்பதன் மூலம் தாவரங்களை (மாமிச உண்ணிகள்)
                    உட்கொண்டுள்ளனர். சில விலங்குகள் இரண்டையும் உண்கின்றன
                    தாவரங்கள் மற்றும் விலங்குகள்; இந்த விலங்குகள் சர்வ உண்ணிகள்
                    என்று அழைக்கப்படுகின்றன. அனைத்து உயிரினங்கள் தங்கள்
                    உயிர்வாழ்வதற்கும் வளர்ச்சிக்கும் உணவு தேவைப்படுகிறது.
                    <br />
                    உணவில் ஊட்டச்சத்துக்கள் எனப்படும் பல்வேறு கூறுகள் உள்ளன
                    கார்போஹைட்ரேட்டுகள், கொழுப்புகள், தாதுக்கள், புரதங்கள்
                    மற்றும் வைட்டமின்கள் உடலின் பராமரிப்புக்கு தேவை. இந்த
                    கூறுகள் சிக்கலானவை மற்றும் நேரடியாகப் பயன்படுத்த முடியாது,
                    எனவே அவை உடைந்துவிட்டன செரிமான செயல்முறை மூலம் எளிய கூறுகளாக
                    கீழே.
                  </p>
                )}
              </>
            ) : null}
            {videoDivision === 1 ? (
              <>
                {language == "en" ? (
                  <div>
                    <p className="second-video-content">
                      1. The process by which digested food enters the walls of
                      blood vessels is known as
                    </p>
                    <p className="second-video-subcontent">
                      It is the process that mainly takes place in a long,
                      highly coiled, narrow tube of the digestive system (Or)
                      The third sequence of nutrition in humans
                    </p>
                    <p className="second-video-content">
                      2. Which of the following regions of the alimentary canal
                      of man does not secrete a digestive enzyme?
                    </p>
                    <p className="second-video-subcontent">
                      It is also called the food pipe
                    </p>
                    <p className="second-video-content">
                      3. The process of transporting absorbed substances from
                      the small intestine to various parts of the body to build
                      complex compounds such as protein is known as
                    </p>
                    <p className="second-video-subcontent">
                      It is the process by which nutrients are transformed into
                      biological tissues and fluids after being digested in the
                      intestine (Or) The fourth sequence of nutrition in humans
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="second-video-content">
                      1. செரிமான உணவு சுவர்களில் நுழையும் செயல்முறை இரத்த
                      நாளங்கள் என அழைக்கப்படுகிறது
                    </p>
                    <p className="second-video-subcontent">
                      இது முக்கியமாக நீண்ட, அதிக அளவில் நடைபெறும்
                      செயல்முறையாகும் சுருள், செரிமான அமைப்பின் குறுகிய குழாய்
                      (அல்லது) மூன்றாவது மனிதர்களில் ஊட்டச்சத்து வரிசை
                    </p>
                    <p className="second-video-content">
                      2. உணவுக் கால்வாயின் பின்வரும் பகுதிகளில் எது மனிதன்
                      செரிமான நொதியை சுரக்கவில்லையா?
                    </p>
                    <p className="second-video-subcontent">
                      இது உணவுக் குழாய் என்றும் அழைக்கப்படுகிறது
                    </p>
                    <p className="second-video-content">
                      3. இருந்து உறிஞ்சப்பட்ட பொருட்களை கொண்டு செல்லும்
                      செயல்முறை உடலின் பல்வேறு பகுதிகளுக்குச் சிறுகுடலைச்
                      சிக்கலான உருவாக்க புரதம் போன்ற கலவைகள் அறியப்படுகின்றன
                    </p>
                    <p className="second-video-subcontent">
                      இது ஊட்டச்சத்துக்களை மாற்றும் செயல்முறையாகும் உயிரியல்
                      திசுக்கள் மற்றும் திரவங்கள் செரிக்கப்பட்ட பிறகு குடல்
                      (அல்லது) மனிதர்களில் ஊட்டச்சத்தின் நான்காவது வரிசை
                    </p>
                  </div>
                )}
              </>
            ) : null}
            {videoDivision === 2 ? (
              <div>
                <p className="details-head">
                  {language == "en" ? "Details" : "விவரங்கள்"}
                </p>
                <div className="email-container">
                  <DefaultEditor value={html} onChange={onChange} />
                </div>
                <button className="ask-btn">Ask</button>
              </div>
            ) : null}
          </div>
        </>
      ) : null}
      {topicChanges === "pdf" ? (
        <>
          <PdfPage dataPageValue={dataPageValue} />
        </>
      ) : null}
      {topicChanges === "practise" ? (
        <>
          <Practise
            dataPageValue={dataPageValue}
            title={titleValue}
            id={user}
          />
        </>
      ) : null}
      {topicChanges === "assesment" ? (
        <>
          <AssesmentPage
            dataPageValue={dataPageValue}
            title={titleValue}
            user={user}
          />
        </>
      ) : null}
    </div>
  );
}

export default VideoPlayer;
