import React, { useState } from "react";
import "../styles/PractiseText.scss";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function PractiseText() {
  const { state } = useLocation();
  const [qusetionData]=useState(state.data)
  const [index, setIndex] = useState(0);
  const [disable, setDisable] = useState(false);
  const [hint, setHint] = useState(false);
  const [explain, setExplain] = useState(false);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const explainBtn = () => {
    setExplain(!explain);
    setHint(false);
  };

  const hintBtn = () => {
    setHint(!hint);
    setExplain(false);
  };

  const checkAns = () => {
    setDisable(true);
    setExplain(true);
  };

  const numSelect=(index)=>{
    setIndex(index)
    setDisable(false)
  }

  const nextBtn = () => {
    setIndex(index + 1);
    setDisable(false);
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

              <hr />
            </div>

            <div className="explain-hint-container">
              {disable ? (
                <div>
                  <p className="explain-text" onClick={explainBtn}>
                    Explanation
                  </p>
                  {explain ? (
                    <p className="explain-content">
                      {qusetionData[index].explanation}
                    </p>
                  ) : null}
                </div>
              ) : (
                <div>
                  <p className="explain-text" onClick={hintBtn}>
                    Hint
                  </p>
                  {hint ? (
                    <p className="explain-content">{qusetionData[index].hint}</p>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="count-side-practise">
          <div>
            <p className="qusetion-head-text">Questions</p>
            <div className="count-number-container">
              <div className="count-number-innercontainer">
                {qusetionData.map((data, index) => (
                  <button key={index} className="active" onClick={()=>numSelect(index)}>
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
          <button className="check-answer" onClick={checkAns}>
            Check answer
          </button>
          {index + 1 === qusetionData.length ? (
            <button className="data-next">Submit</button>
          ) : (
            <>
              {disable ? (
                <button onClick={nextBtn} className="data-next">
                  Next
                </button>
              ) : (
                <button disabled onClick={nextBtn} className="data-next">
                  Next
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PractiseText;
