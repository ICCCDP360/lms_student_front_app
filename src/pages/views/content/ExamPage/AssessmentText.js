import React, { useState } from "react";
import "../styles/PractiseText.scss";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function AssessmentText() {
  const { state } = useLocation();
  const [qusetionData] = useState(state.data);
  const [index, setIndex] = useState(0);
  const totalTime = 360;
  const [countdown] = useState(totalTime);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const skipChange = () => {
    setIndex(index + 1);
  };

  const numSelect = (index) => {
    setIndex(index);
  };

  const nextBtn = () => {
    setIndex(index + 1);
  };
  return (
    <div className="practisetext-fullcontainer">
      <p className="heading-subject">{state.heading}</p>
      <div className="practise-container-sm">
        <div className="questionpage-practice-container">
          <div className="questionpage-inner-container">
            <p className="question-text">
              {index + 1}.{qusetionData[index].question}
            </p>

            <div className="answer-label">
              {qusetionData[index].answeroptions.map((data,index) => (
                <div className="answer-inner-container" key={index}>
                  <input className="radio-input" type="radio" />
                  <span className="answer-text">{data.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        

        <div className="count-side-practise">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2%",
            borderBottom: "1px solid #A2A2A2",
            backgroundColor: "#CDF3EF",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              marginBottom: "0px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Remaining Timing:
          </p>
          <p style={{ marginBottom: "0px" }}>
            {formatTime(countdown)}
          </p>
        </div>
          <div>
            <p className="qusetion-head-text">Questions</p>
            <div className="count-number-container">
              <div className="count-number-innercontainer">
                {qusetionData.map((data, index) => (
                  <button key={index} className="active" onClick={() => numSelect(index)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data-button">
        {index > 0 ? (
          <Button onClick={handlePrev} className="prev-btn">
            Prev
          </Button>
        ) : (
          <Button disabled onClick={handlePrev} className="prev-btn">
            Prev
          </Button>
        )}

        <div style={{ display: "flex" }}>
          <button className="skip-answer" onClick={skipChange}>
            Skip
          </button>
          {index + 1 === qusetionData.length ? (
            <button className="data-next">Submit</button>
          ) : (
            <>
              <button onClick={nextBtn} className="data-next">
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssessmentText;
