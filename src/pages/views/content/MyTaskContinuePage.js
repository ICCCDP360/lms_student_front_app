import React, { useEffect } from "react";
import "./styles/TaskContinue.scss";
import Telescope from "../../../assets/images/telescope.svg";
import Search from "../../../assets/images/search.svg";
import Intro from "../../../assets/images/Intro.svg";
import PDF from "../../../assets/images/pdfsample.svg";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import videoContentService from "../../../services/videoByCourse";
import pdfContentService from "../../../services/pdfByCourse";
import practiseContentService from "../../../services/practiseByCourse";
import assessmentContentService from "../../../services/assessmentByCourse";

function MyTaskContinuePage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, "manoj");
  const [videoChapter, setVideoChapter] = useState([]);
  const [pdfsChapter, setPdfChapter] = useState([]);
  const [practisesChapter, setPractiseChapters] = useState([]);
  const [assessmentsChapter, setAssessmentChapters] = useState([]);

  useEffect(() => {
    getChapter();
  }, []);

  const getChapter = () => {
    let data = {
      chapterId: state.chapterId,
      languageCode: "en",
    };
    videoContentService.videoContent(data).then((res) => {
      setVideoChapter(res);
    });
  };

  const pdfChapter = () => {
    let data = {
      chapterId: state.chapterId,
      languageCode: "en",
    };
    pdfContentService.pdfContent(data).then((res) => {
      setPdfChapter(res);
    });
  };

  const practiseChapter = () => {
    let data = {
      chapterId: state.chapterId,
      languageCode: "en",
    };
    practiseContentService.practiseContent(data).then((res) => {
      setPractiseChapters(res);
    });
  };

  const assessmentChapter = () => {
    let data = {
      chapterId: state.chapterId,
      languageCode: "en",
    };
    assessmentContentService.assessmentContent(data).then((res) => {
      setAssessmentChapters(res);
    });
  };

  const videoClick = () => {
    setStep(0);
    getChapter();
  };

  const pdfClick = () => {
    setStep(1);
    pdfChapter();
  };

  const practiseClick = () => {
    setStep(2);
    practiseChapter();
  };

  const assessmentClick = () => {
    setStep(3);
    assessmentChapter();
  };

  return (
    // <div className="content-full-container">
    //   <div className="header-container">
    //     <div className="subject-container">
    //       <p className="subject-name mb-2">{state.subject}</p>
    //       <p className="content-name mb-2">{state.chapterName}</p>
    //     </div>
    //     <div>
    //       <img src={Telescope} className="me-4" />
    //     </div>
    //   </div>
    //   <div className="sub-content-container">
    //     <div className="top-header-container">
    //       <div className="subject-container">
    //         <p
    //           onClick={() => setStep(0)}
    //           className={
    //             step === 0 ? "mb-0 subject-text-active" : "mb-0 subject-text"
    //           }
    //         >
    //           Video
    //         </p>
    //         <p
    //           onClick={() => setStep(1)}
    //           className={
    //             step === 1 ? "mb-0 subject-text-active" : "mb-0 subject-text"
    //           }
    //         >
    //           PDF
    //         </p>
    //         <p
    //           onClick={() => setStep(2)}
    //           className={
    //             step === 2 ? "mb-0 subject-text-active" : "mb-0 subject-text"
    //           }
    //         >
    //           Practise
    //         </p>
    //         <p
    //           onClick={() => setStep(3)}
    //           className={
    //             step === 3 ? "mb-0 subject-text-active" : "mb-0 subject-text"
    //           }
    //         >
    //           Assessment
    //         </p>
    //       </div>
    //       <div className="input-container">
    //         <img src={Search} width={20} />
    //         <input className="inputs" placeholder="Search for topics" />
    //       </div>
    //     </div>
    //     <div className="mt-4 content-show">
    //       {step === 0 ? (
    //         <div>
    //           <Row>
    //             {subChapter.map((data,index) => (
    //               <Col lg="3" md="6" key={index}>
    //                 <div
    //                   className="video-full-container"
    //                   onClick={() =>
    //                     navigate("/contentshow", { state: {name:"video",id:data.subchapterId} })
    //                   }
    //                 >
    //                   <div>
    //                     <img src={Intro} className="video-main-img" />
    //                   </div>
    //                   <p className="video-header-content mt-2">
    //                     {data.subChapterName}
    //                   </p>
    //                 </div>
    //               </Col>
    //             ))}
    //           </Row>
    //         </div>
    //       ) : null}

    //       {step === 1 ? (
    //         <div>
    //           <Row>
    //             {/* {videoData.map((data, index) => ( */}
    //             {subChapter.map((data,index) => (
    //               <Col lg="3" md="6" key={index}>
    //                 <div
    //                   className="video-full-container"
    //                   onClick={() => navigate("/contentshow", { state: {name:"pdf",id:data.subchapterId} })}
    //                 >
    //                   <div>
    //                     <img src={PDF} className="video-main-img" />
    //                   </div>
    //                   <p className="video-header-content mt-2">
    //                     {data.subChapterName}
    //                   </p>
    //                   <button className="mytask-btn mt-3">Read</button>
    //                 </div>
    //               </Col>
    //             ))}
    //           </Row>
    //         </div>
    //       ) : null}

    //       {step === 2 ? (
    //         <div>
    //           <Row>
    //             {/* {videoData.map((data, index) => ( */}
    //             {subChapter.map((data,index) => (
    //               <Col lg="3" md="6" key={index}>
    //                 <div
    //                   className="video-full-container"
    //                   onClick={() =>
    //                     navigate("/contentshow", { state: {name:"practise",id:data.subchapterId} })
    //                   }
    //                 >
    //                   <div>
    //                     <img src={Intro} className="video-main-img" />
    //                   </div>
    //                   <p className="video-header-content mt-2 mb-0">
    //                     {data.subChapterName}
    //                   </p>
    //                   <button className="mytask-btn mb-4">Practise</button>
    //                 </div>
    //               </Col>
    //             ))}
    //           </Row>
    //         </div>
    //       ) : null}

    //       {step === 3 ? (
    //         <div>
    //           <Row>
    //             {/* {videoData.map((data, index) => ( */}
    //             {subChapter.map((data,index) => (
    //               <Col lg="3" md="6" key={index}>
    //                 <div
    //                   className="video-full-container"
    //                   onClick={() =>
    //                     navigate("/contentshow", { state: {name:"assessment",id:data.subchapterId} })
    //                   }
    //                 >
    //                   <div>
    //                     <img src={Intro} className="video-main-img" />
    //                   </div>
    //                   <p className="video-header-content mt-2 mb-0">
    //                     {data.subChapterName}
    //                   </p>
    //                   <button className="mytask-btn mb-4">Take Test</button>
    //                 </div>
    //               </Col>
    //             ))}
    //             {/* <Col lg="3" md="6">
    //               <div className="video-full-container">
    //                 <div>
    //                   <img src={Mouth} className="video-main-img" />
    //                 </div>
    //                 <p className="video-header-content mt-2">
    //                   Mouth & Buccal cavity
    //                 </p>
    //                 <button className="mytask-btn mt-3">Take Test</button>
    //               </div>
    //             </Col> */}
    //             {/* ))} */}
    //           </Row>
    //         </div>
    //       ) : null}
    //     </div>
    //   </div>
    // </div>
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
              onClick={videoClick}
              className={
                step === 0 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Video
            </p>
            <p
              onClick={pdfClick}
              className={
                step === 1 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              PDF
            </p>
            <p
              onClick={practiseClick}
              className={
                step === 2 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Practise
            </p>
            <p
              onClick={assessmentClick}
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
                {/* {videoData.map((data, index) => ( */}
                {videoChapter.map((data) => (
                  <>
                    {data.video.map((data,index) => (
                      <Col lg="3" md="6" key={index}>
                        <div
                          className="video-full-container"
                          onClick={() =>
                            navigate("/contentshow", {
                              state: {
                                name: "video",
                                id: videoChapter[0].chapterId,
                              },
                            })
                          }
                        >
                          <div>
                            <img src={Intro} className="video-main-img" />
                          </div>
                          <p className="video-header-content mt-2">
                            {data.fileName}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </>
                ))}

                {/* <Col lg="3" md="6">
                  <div className="video-full-container">
                    <div>
                      <img src={Mouth} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">
                      Mouth & Buccal cavity
                    </p>
                  </div>
                </Col> */}
                {/* ))} */}
              </Row>
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                {pdfsChapter.map((data) => (
                  <>
                    {data.pdf.map((data,index) => (
                      <Col lg="3" md="6" key={index}>
                        {data.length === 0 ? (
                          <p>No PDF</p>
                        ) : (
                          <div
                            className="video-full-container"
                            onClick={() =>
                              navigate("/contentshow", {
                                state: {
                                  name: "pdf",
                                  id: pdfsChapter[0].chapterId,
                                },
                              })
                            }
                          >
                            <div>
                              <img src={PDF} className="video-main-img" />
                            </div>
                            <p className="video-header-content mt-2 mb-0">
                              {data.subChapterName}
                            </p>
                            <button className="mytask-btn mb-4">Read</button>
                          </div>
                        )}
                      </Col>
                    ))}
                  </>
                ))}
              </Row>
            </div>
          ) : null}

          {step === 2 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                {practisesChapter.map((data) => (
                  <>
                    {data.practices.map((data,index) => (
                      <Col lg="3" md="6" key={index}>
                        {data.length === 0 ? (
                          <p>No Prcatise</p>
                        ) : (
                          <div
                            className="video-full-container"
                            onClick={() =>
                              navigate("/contentshow", {
                                state: {
                                  name: "practise",
                                  id: practisesChapter[0].chapterId,
                                },
                              })
                            }
                          >
                            <div>
                              <img src={Intro} className="video-main-img" />
                            </div>
                            <p className="video-header-content mt-2 mb-0">
                              {data.subChapterName}
                            </p>
                            <button className="mytask-btn mb-4">
                              Practise
                            </button>
                          </div>
                        )}
                      </Col>
                    ))}
                  </>
                ))}
              </Row>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                {assessmentsChapter.map((data) => (
                  <>
                    {data.assessments.map((data,index) => (
                      <Col lg="3" md="6" key={index}>
                        {data.length === 0 ? (
                          <p>No assessment</p>
                        ) : (
                          <div
                            className="video-full-container"
                            onClick={() =>
                              navigate("/contentshow", {
                                state: {
                                  name: "assessment",
                                  id: assessmentsChapter[0].chapterId,
                                },
                              })
                            }
                          >
                            <div>
                              <img src={Intro} className="video-main-img" />
                            </div>
                            <p className="video-header-content mt-2 mb-0">
                              {data.subChapterName}
                            </p>
                            <button className="mytask-btn mb-4">
                              Take Test
                            </button>
                          </div>
                        )}
                      </Col>
                    ))}
                  </>
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
