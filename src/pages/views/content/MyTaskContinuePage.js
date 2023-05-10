import React, { useEffect } from "react";
import "./styles/TaskContinue.scss";
import Telescope from '../../../assets/images/telescope.svg'
import Search from "../../../assets/images/search.svg";
import Intro from "../../../assets/images/Intro.svg";
import PDF from "../../../assets/images/pdfsample.svg";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import subChapterService from "../../../services/subChapter";

function MyTaskContinuePage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [subChapter, setSubChapter] = useState([]);

  useEffect(() => {
    getChapter();
  }, []);

  const getChapter = () => {
    subChapterService
      .subChapter(state.chapterId)
      .then((res) => {
        setSubChapter(res);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  }

  return (
    <div className="content-full-container">
      <div className="header-container">
        <div className="subject-container">
          <p className="subject-name mb-2">{state.subject}</p>
          <p className="content-name mb-2">{state.chapterName}</p>
        </div>
        <div>
          <img src={Telescope} className="me-4" />
        </div>
      </div>
      <div className="sub-content-container">
        <div className="top-header-container">
          <div className="subject-container">
            <p
              onClick={() => setStep(0)}
              className={
                step === 0 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Video
            </p>
            <p
              onClick={() => setStep(1)}
              className={
                step === 1 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              PDF
            </p>
            <p
              onClick={() => setStep(2)}
              className={
                step === 2 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Practise
            </p>
            <p
              onClick={() => setStep(3)}
              className={
                step === 3 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Assessment
            </p>
          </div>
          <div className="input-container">
            <img src={Search} width={20} />
            <input className="inputs" placeholder="Search for topics" />
          </div>
        </div>
        <div className="mt-4 content-show">
          {step === 0 ? (
            <div>
              <Row>
                {subChapter.map((data,index) => (
                  <Col lg="3" md="6" key={index}>
                    <div
                      className="video-full-container"
                      onClick={() =>
                        navigate("/contentshow", { state: {name:"video",id:data.subchapterId} })
                      }
                    >
                      <div>
                        <img src={Intro} className="video-main-img" />
                      </div>
                      <p className="video-header-content mt-2">
                        {data.subChapterName}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                {subChapter.map((data,index) => (
                  <Col lg="3" md="6" key={index}>
                    <div
                      className="video-full-container"
                      onClick={() => navigate("/contentshow", { state: {name:"pdf",id:data.subchapterId} })}
                    >
                      <div>
                        <img src={PDF} className="video-main-img" />
                      </div>
                      <p className="video-header-content mt-2">
                        {data.subChapterName}
                      </p>
                      <button className="mytask-btn mt-3">Read</button>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ) : null}

          {step === 2 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                {subChapter.map((data,index) => (
                  <Col lg="3" md="6" key={index}>
                    <div
                      className="video-full-container"
                      onClick={() =>
                        navigate("/contentshow", { state: {name:"practise",id:data.subchapterId} })
                      }
                    >
                      <div>
                        <img src={Intro} className="video-main-img" />
                      </div>
                      <p className="video-header-content mt-2">
                        {data.subChapterName}
                      </p>
                      <button className="mytask-btn mt-3">Practise</button>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                {subChapter.map((data,index) => (
                  <Col lg="3" md="6" key={index}>
                    <div
                      className="video-full-container"
                      onClick={() =>
                        navigate("/contentshow", { state: {name:"assessment",id:data.subchapterId} })
                      }
                    >
                      <div>
                        <img src={Intro} className="video-main-img" />
                      </div>
                      <p className="video-header-content mt-2">
                        {data.subChapterName}
                      </p>
                      <button className="mytask-btn mt-3">Take Test</button>
                    </div>
                  </Col>
                ))}
                {/* <Col lg="3" md="6">
                  <div className="video-full-container">
                    <div>
                      <img src={Mouth} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">
                      Mouth & Buccal cavity
                    </p>
                    <button className="mytask-btn mt-3">Take Test</button>
                  </div>
                </Col> */}
                {/* ))} */}
              </Row>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MyTaskContinuePage;
