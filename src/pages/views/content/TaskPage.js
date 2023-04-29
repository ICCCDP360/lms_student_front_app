import React from "react";
import PlayVideo from "../../../assets/images/playVideo.svg";
import Practise from "../../../assets/images/practise.svg";
import Quiz from "../../../assets/images/quiz.svg";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";
// import {
//   allconcept,
//   completeconcept,
//   taskCourse,
// } from "../../../services/allconcept";
// import allconceptServices from "../../../services/allconcept";
import { useEffect } from "react";
import "./styles/TaskHeader.scss";
import courseDatasServices from '../../../services/coursePageService'
function TaskPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  // const [alldata, setAlldata] = useState([]);
  const [Task, setTask] = useState([]);
  // const [completedata, setCompletedata] = useState([]);
  const language = localStorage.getItem("lang") || "english";
  const user_id = localStorage.getItem("userDetails");
  // const school_id = localStorage.getItem("schoolDetails");
  // const stu_id = JSON.parse(user_id)._id;
  const std = JSON.parse(user_id).std;
  // const scl_id = JSON.parse(school_id)._id;

  // const myCompleted = (id, name, category) => {
  //   navigate("/content/task", {
  //     state: { id: id, name: name, category: category },
  //   });
  // };

  // const alldatas = (id, name, category) => {
  //   navigate("/content/task", {
  //     state: { id: id, name: name, category: category },
  //   });
  // };

  const myTaskContinue = (id, name, category) => {
    navigate("/content/task", {
      state: { id: id, name: name, category: category },
    });
  };

  // const myTaskCompleted = (id) => {
  //   setStep(2);
  //   allconceptServices.completeconcept(id, language).then((res) => {
  //     // console.log("manoj", res.data);
  //     setCompletedata(res.data);
  //   });
  // };
  // const Alltask = () => {
  //   setStep(1);
  //   allconceptServices.allconcept(language, scl_id, std).then((res) => {
  //     setAlldata(res.data);
  //   });
  // };

  const myTask = () => {
    setStep(0);
    // allconceptServices.taskCourse(id, language).then((res) => {
    //   // console.log(res.data, "manoj");
    //   setTask(res.data);
    // });
    courseDatasServices.courseDatas(language,std).then((res)=>{
      // console.log(res,'kumar')
      setTask(res);
    })
  };

  useEffect(() => {
    myTask();
    // setStep(0)
    
  }, []);

  return (
    <div>
      <div className="full-subcontainer">
        <div className="task-topheader-container">
          <div className="inside-task-tabs">
            <div className="lefttabs">
              <p
                onClick={myTask}
                className={step === 0 ? "selectDailyTask" : "dailyTask"}
              >
                {language == "english" ? "My Task" : "என் பணி"}
              </p>
              <p
                onClick={()=>setStep(1)}
                className={step === 1 ? "selectAllTask" : "dailyTask"}
              >
                {language == "english" ? "All" : "அனைத்து"}
              </p>
              <p
                onClick={()=>setStep(2)}
                className={step === 2 ? "selectAllTask" : "dailyTask"}
              >
                {language == "english" ? "Completed" : "முடிந்தது"}
              </p>
            </div>
            <div className="rightsearch">
              <div className="searchs">
                <SearchOutlined className="search-icon" />
                <input
                  className="inputs"
                  placeholder="Search for subjects, chapters"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {step === 0 ? (
        <div>
          <div className="myTask-full-border">
            {Task.map((data, index) => {
              return (
                <>
                {console.log(data,'kumar')}
                  <div className="myTask-full-container" key={index}>
                    <div
                      className="mytask-sub-container"
                      style={{ backgroundColor: "#CDF3EF" }}
                    >
                      <div>
                        {/* <p className="subject-name">{data.category}</p> */}
                        <h1 className="subject-content">{data.name}</h1>
                        <div
                          className={
                            language == "english"
                              ? "subject-btm-container"
                              : "subject-btm-container-tamil"
                          }
                        >
                          <img src={PlayVideo} />
                          <p className="subject-btm-text">
                            {data.videosCount}{" "}
                            {language == "english" ? "Video" : "வீடியோ"}
                          </p>
                          <img src={Practise} />
                          <p className="subject-btm-text">
                            {data.practicesCount}{" "}
                            {language == "english" ? "Practice" : "பயிற்சி"}
                          </p>
                          <img src={Quiz} />
                          <p className="subject-btm-text">
                            {data.assessmentsCount}{" "}
                            {language == "english" ? "Quiz" : "வினாடி வினா"}
                          </p>
                        </div>
                        <button
                          className="mytask-btn"
                          style={{ backgroundColor: "#03C4AD" }}
                          onClick={() =>
                            myTaskContinue(
                              data._id,
                              data.name,
                              // data.category
                            )
                          }
                        >
                          {language == "english" ? "Continue" : "தொடரவும்"}
                        </button>
                      </div>
                      {/* <div className="task-progress-size">
                        {data.completed_percentage}%
                        <ProgressBar
                          now={data.completed_percentage}
                          variant="info"
                        />
                      </div> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : null}
      {step === 1 ? (
        <div>
          <div className="myTask-full-border">
            {Task.map((data, index) => (
              <div className="myTask-full-container" key={index}>
                <div
                  className="mytask-sub-container"
                  style={{ backgroundColor: "#CDF3EF" }}
                >
                  <div>
                    <p className="subject-name">{data.category}</p>
                    <h1 className="subject-content">{data.name}</h1>
                    <div
                      className={
                        language == "english"
                          ? "subject-btm-container"
                          : "subject-btm-container-tamil"
                      }
                    >
                      <img src={PlayVideo} />
                      <p className="subject-btm-text">
                            {data.videosCount}{" "}
                            {language == "english" ? "Video" : "வீடியோ"}
                          </p>
                          <img src={Practise} />
                          <p className="subject-btm-text">
                            {data.practicesCount}{" "}
                            {language == "english" ? "Practice" : "பயிற்சி"}
                          </p>
                          <img src={Quiz} />
                          <p className="subject-btm-text">
                            {data.assessmentsCount}{" "}
                            {language == "english" ? "Quiz" : "வினாடி வினா"}
                          </p>
                    </div>
                    <button
                      className="mytask-btn"
                      style={{ backgroundColor: "#03C4AD" }}
                      onClick={() =>
                        myTaskContinue(data._id, data.name, data.category)
                      }
                    >
                      {language == "english" ? "Continue" : "தொடரவும்"}
                    </button>
                  </div>
                  {/* <div className="task-progress-size">
                    {data.completed_percentage} %
                    <ProgressBar
                      now={data.completed_percentage}
                      variant="info"
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {step === 2 ? (
        <div>
          <div className="myTask-full-border">
            {Task.map((data, index) => (
              <div className="myTask-full-container" key={index}>
                <div
                  className="mytask-sub-container"
                  style={{ backgroundColor: "#CDF3EF" }}
                >
                  <div>
                    <p className="subject-name">{data.category}</p>
                    <h1 className="subject-content">{data.name}</h1>
                    <div
                      className={
                        language == "english"
                          ? "subject-btm-container"
                          : "subject-btm-container-tamil"
                      }
                    >
                      <img src={PlayVideo} />
                      <p className="subject-btm-text">
                            {data.videosCount}{" "}
                            {language == "english" ? "Video" : "வீடியோ"}
                          </p>
                          <img src={Practise} />
                          <p className="subject-btm-text">
                            {data.practicesCount}{" "}
                            {language == "english" ? "Practice" : "பயிற்சி"}
                          </p>
                          <img src={Quiz} />
                          <p className="subject-btm-text">
                            {data.assessmentsCount}{" "}
                            {language == "english" ? "Quiz" : "வினாடி வினா"}
                          </p>
                    </div>
                    <button
                      className="mytask-btn"
                      style={{ backgroundColor: "#03C4AD" }}
                      onClick={() =>
                        myTaskContinue(data._id, data.name, data.category)
                      }
                    >
                      {language == "english" ? "Continue" : "தொடரவும்"}
                    </button>
                  </div>
                  {/* <div className="task-progress-size">
                    {data.completed_percentage} %
                    <ProgressBar
                      now={data.completed_percentage}
                      variant="info"
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {/* {step === 2 ? (
        <>
          <div className="completed-full-border">
            {Task.map((data, index) => (
              <div className="completed-full-container" key={index}>
                <div
                  className="complete-sub-container"
                  // style={{ backgroundColor: "#CDF3EF" }}
                >
                  <div className="completed">
                    <p className="subject-name">{data.category}</p>
                    <h1
                      className="subject-content"
                      style={{ color: "#333333" }}
                    >
                      {data.name}
                    </h1>
                    <div
                      className={
                        language == "english"
                          ? "comp-subject-btm-container"
                          : "comp-subject-btm-container-tamil"
                      }
                    >
                      <img src={PlayVideo} />
                      <p className="subject-btm-text">
                        {data.video_count}{" "}
                        {language == "english" ? "Video" : "வீடியோ"}
                      </p>
                      <img src={Quiz} />
                      <p className="subject-btm-text">
                        {data.practice_count}{" "}
                        {language == "english" ? "Quiz" : "வினாடி வினா"}
                      </p>
                    </div>
                    <button
                      className="complete-btn"
                      style={{ backgroundColor: "#03C4AD" }}
                      onClick={() =>
                        myTaskContinue(data.myconcept_id, data.name, data.category)
                      }
                    >
                      {language == "english" ? "Restart" : "மறுதொடக்கம்"}
                    </button>
                  </div>
                  <div className="task-progress-size">
                    {data.completed_percentage}%
                    <ProgressBar
                      className="progress-bar"
                      now={data.completed_percentage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null} */}
    </div>
  );
}

export default TaskPage;
