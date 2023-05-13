import React from "react";
import Video from "../../../assets/images/videoProcess.svg";
import videoComplete from "../../../assets/images/videoFinish.svg";
import Pdf from "../../../assets/images/pdfview.svg";
import PdfProcess from "../../../assets/images/pdfProcess.svg";
import PdfComplete from "../../../assets/images/pdfFinish.svg";
import Practise from "../../../assets/images/practiseview.svg";
import PractiseProcess from "../../../assets/images/practiseProcess.svg";
import PractiseComplete from "../../../assets/images/practiseFinish.svg";
import Assessment from "../../../assets/images/assessmentview.svg";
import AssessmentProcess from "../../../assets/images/assessmentProcess.svg";
import "./styles/ContentPlayPage.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import pdfContentService from "../../../services/pdfByCourse";
import videoContentService from "../../../services/videoByCourse";
import practiseContentService from '../../../services/practiseByCourse'
import assessmentContentService from '../../../services/assessmentByCourse'
import VideoPlayer from './ContentShowPage/VideoPlayer'
import PdfPage from './ContentShowPage/PdfPage'
import PractisePage from './ContentShowPage/PractisePage'
import AssessmentPage from './ContentShowPage/AssessmentPage'

function ContentPlayPage() {
  const { state } = useLocation();
  const [pageDeside, setPageDeside] = useState(state.name);
  const [getId] = useState(state.id);
  const [videoImg, setVideoImg] = useState(Video);
  const [pdfImg, setPdfImg] = useState(Pdf);
  const [practiseImg, setPractiseImg] = useState(Practise);
  const [assessmentImg, setAssessmentImg] = useState(Assessment);
  const [heading,setHeading]=useState('')
  const [videoData, setVideoData] = useState("");
  const [pdfData, setPdfData] = useState("");
  const [practiseData,setPractiseData]=useState([])
  const [assessmentData,setAssessmentData]=useState([])
  const language = localStorage.getItem('lang')||'en'

  const videoSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        chapterId: id,
        languageCode:language
      };
      videoContentService
        .videoContent(data)
        .then((res) => {
          setHeading(res[0].subChapterName)
          setVideoData(res[0].video[0].videoId);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const pdfSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        chapterId: id,
        languageCode:language
      };
      pdfContentService
        .pdfContent(data)
        .then((res) => {
          setPdfData(res[0].pdf[0].pdfUrl)
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const practiseSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        chapterId: id,
        languageCode:language
      };
      practiseContentService
        .practiseContent(data)
        .then((res) => {
          setPractiseData(res[0].practices)
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const assessmentSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        chapterId: id,
        languageCode:language
      };
      assessmentContentService
        .assessmentContent(data)
        .then((res) => {
          setAssessmentData(res[0].assessments)
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  useEffect(() => {
    if (pageDeside == "video") {
      videoSelectionApi(getId);
    } else if (pageDeside == "pdf") {
      pdfSelectionApi(getId);
    } else if (pageDeside == "practise") {
      practiseSelectionApi(getId);
    }else if (pageDeside == "assessment") {
      assessmentSelectionApi(getId);
    }
  }, []);

  useEffect(() => {
    if (pageDeside == "video") {
      setVideoImg(Video);
      setPdfImg(Pdf);
      setPractiseImg(Practise);
      setAssessmentImg(Assessment);
    } else if (pageDeside == "pdf") {
      setVideoImg(videoComplete);
      setPdfImg(PdfProcess);
      setPractiseImg(Practise);
      setAssessmentImg(Assessment);
    } else if (pageDeside == "practise") {
      setVideoImg(videoComplete);
      setPdfImg(PdfComplete);
      setPractiseImg(PractiseProcess);
      setAssessmentImg(Assessment);
    } else if (pageDeside == "assessment") {
      setVideoImg(videoComplete);
      setPdfImg(PdfComplete);
      setPractiseImg(PractiseComplete);
      setAssessmentImg(AssessmentProcess);
    }
  });

  const videoClick = () => {
    setPageDeside("video");
    videoSelectionApi(getId);
  };

  const pdfClick = () => {
    setPageDeside("pdf");
    pdfSelectionApi(getId);
  };

  const practiseClick = () => {
    setPageDeside("practise");
    practiseSelectionApi(getId);
  };

  const assessmentClick = () => {
    setPageDeside("assessment");
    assessmentSelectionApi(getId);
  };
  return (
    <div className="content-page-full">
      <div>
        <p className="sub-heading">{heading}</p>
        <div className="heading-img-maincontainer mt-3">
          <div className="heading-img-container">
            <div onClick={videoClick}>
              <img src={videoImg} />
              <p>Video</p>
            </div>
            <div onClick={pdfClick}>
              <img src={pdfImg} />
              <p>Pdf</p>
            </div>
            <div onClick={practiseClick}>
              <img src={practiseImg} />
              <p>Practise</p>
            </div>
            <div onClick={assessmentClick}>
              <img src={assessmentImg} />
              <p>Assessment</p>
            </div>
          </div>
        </div>
      </div>
      {pageDeside == "video" ? <VideoPlayer videoData={videoData} /> : null}
      {pageDeside == "pdf" ? <PdfPage pdfData={pdfData}/> : null}
      {pageDeside == "practise" ? <PractisePage practiseData={practiseData} heading={heading}/> : null}
      {pageDeside == "assessment" ? <AssessmentPage assessmentData={assessmentData} heading={heading}/> : null}
    </div>
  );
}

export default ContentPlayPage;
