import React from "react";
import "./styles/TaskPage.scss";
import Search from "../../../assets/images/search.svg";
import { useState } from "react";
import Chapter from "../../../assets/images/chapter.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import subjectService from "../../../services/subjectService";
import classSelectionService from "../../../services/courseStd";
// import { ProgressBar } from "react-bootstrap";

function Subject() {
  const [step, setStep] = useState(0);
  // const std = JSON.parse(localStorage.getItem("std"));
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const [subjectData, setSubjectData] = useState([]);

  const classSelectionApi = (step) => {
    let data = {
      standard: localStorage.getItem("std"),
    };
    if (data?.standard) {
      classSelectionService.classSelect(data).then((res) => {
        setState(res);
        console.log(res,'res');
        if (step) {
          let data = {
            standard: res[step].standard,
            subject: res[step].subject,
            courseId: res[step].courseId,
          };
          subjectService
            .subjectServiceSelect(data)
            .then((res) => {
              setSubjectData(res);
              console.log(res, "res1");
            })
            .catch((err) => {
              console.log(err, "err1");
              setSubjectData(err.response.data);
            });
        } else {
          let data = {
            standard: res[0].standard,
            subject: res[0].subject,
            courseId: res[0].courseId,
          };
          console.log(data,'data');
          subjectService
            .subjectServiceSelect(data)
            .then((res) => {
              setSubjectData(res);
              console.log(res, "res2");
            })
            .catch((err) => {
              console.log(err, "err2");
            });
        }
      });
    } else {
      console.log("Error Something Data...");
    }
  };

  const subjectText = (index) => {
    setStep(index);
    classSelectionApi(index);
  };
  useEffect(() => {
    classSelectionApi();
  }, []);

  const courseContentPage = (data) => {
    navigate("/content/task", { state: data });
  };

  return (
    <div className="subject-full-container">
      <div className="top-header-container">
        <div className="subject-container">
          {state.map((data, index) => (
            <p
              key={index}
              onClick={() => subjectText(index)}
              className={
                step === index
                  ? "mb-0 subject-text-active"
                  : "mb-0 subject-text"
              }
            >
              {data.subject}
            </p>
          ))}
        </div>
        <div className="input-container">
          <img src={Search} width={20} />
          <input
            className="inputs"
            placeholder="Search for subjects, chapters"
          />
        </div>
      </div>

      {subjectData.map((data) => (
        <>
        {data.chapters.map((data,index) => (
          <div className="myTask-full-container mt-4" key={index}>
            <div className="mytask-sub-container">
              <div>
                <h1 className="subject-content">{data.chapterName}</h1>
                <div className="subject-btm-container mt-3">
                  <img src={Chapter} />
                  <p className="subject-btm-text mb-0">
                    {data.subchaptersCount} Chapter
                  </p>
                </div>
                <button
                  onClick={() => courseContentPage(data)}
                  className="mytask-btn mt-3"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
      ))}

      {/* {step === 0 ? (
        <div className="myTask-full-container mt-4">
          <div className="mytask-sub-container">
            <div>
              <h1 className="subject-content">Nutrition in Animals</h1>
              <div className="subject-btm-container mt-3">
                <img src={Chapter} />
                <p className="subject-btm-text mb-0">8 Chapter</p>
              </div>
              <button
                onClick={() => navigate("/course/content")}
                className="mytask-btn mt-3"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null} */}
      {/* {step === 1 ? (
        <div className="myTask-full-container mt-4">
          <div className="mytask-sub-container">
            <div>
              <h1 className="subject-content">Geomentry</h1>
              <div className="subject-btm-container mt-3">
                <img src={Chapter} />
                <p className="subject-btm-text mb-0">5 Chapter</p>
              </div>
              <button
                onClick={() => navigate("/course/content")}
                className="mytask-btn mt-3"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null} */}
    </div>
  );
}

export default Subject;
