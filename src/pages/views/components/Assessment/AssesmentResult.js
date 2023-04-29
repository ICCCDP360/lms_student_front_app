import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Correct from "../../../../assets/images/correct.svg";
import Wrong from "../../../../assets/images/wrong.svg";
import Notans from "../../../../assets/images/not ans.svg";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function AssesmentResult({
  resultPage,
  handlebutton,
  selectedNum,
  roundbtn,
  handleChange,
  data,
  title,
  resultdata,
  correctAnswerCount,
}) {
  const language = localStorage.getItem("lang") || "english";
  // const navigate = useNavigate();
  // const { state } = useLocation();
  // console.log(state, "manojkumar");

  // const datas = state.data;

  const retake = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <h1 style={{ fontSize: "24px", fontWeight: "700" }}>
            {/* {language == "english" ? "Digestive System" : "செரிமான அமைப்பு"} */}
            {title}
          </h1>

          <Button
            style={{ borderRadius: "20px" }}
            variant="outline-success"
            onClick={retake}
          >
            {language == "english" ? "Retake Test" : "மீண்டும் சோதனை"}
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3%",
          }}
        >
          <div
            style={{
              border: "1px solid gray",
              flexDirection: "column",
              width: "100%",
              borderRadius: "10px",
              padding: "1%",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "40%" }}>
                <h5>{language == "english" ? "Summary" : "சுருக்கம்"}</h5>
                <p className="mt-3">
                  {language == "english"
                    ? `Total number of questions: ${data.length}`
                    : "கேள்விகளின் மொத்த எண்ணிக்கை: 7"}
                </p>
                <p>
                  {language == "english"
                    ? `Number of questions attempted: ${resultdata[0].attended.length}`
                    : `முயற்சித்த கேள்விகளின் எண்ணிக்கை: ${resultdata[0].attended.length}`}
                </p>
                <p>
                  {language == "english"
                    ? `Number of questions correct:  ${correctAnswerCount}`
                    : `சரியான கேள்விகளின் எண்ணிக்கை:  ${correctAnswerCount}`}
                </p>
              </div>
              <div style={{ width: "60%" }}>
                <div
                  style={{
                    width: "22%",
                    marginLeft: "35%",
                  }}
                >
                  <CircularProgressbar
                    value={40}
                    text={`${correctAnswerCount}/${data.length}`}
                    // text={`2/${data.length}`}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* <p>
                {language == "english"
                  ? "Number of taken attempt: 5"
                  : "எடுக்கப்பட்ட முயற்சிகளின் எண்ணிக்கை: 5"}
              </p> */}
              {/* <p>
                {language == "english"
                  ? "Number of remaining attempt: 2"
                  : "மீதமுள்ள முயற்சிகளின் எண்ணிக்கை: 2"}
              </p> */}
              <p>
                {language == "english"
                  ? `Time spent: ${resultdata[1]}mins`
                  : `செலவழித்த நேரம்: ${resultdata[1]} நிமிடங்கள்`}
              </p>
            </div>
            <div>
              <Button
                // variant="danger"
                style={{
                  borderRadius: "25px",
                  backgroundColor: "#03C4AD",
                  border: "none",
                  fontSize: "16px",
                }}
              >
                {language == "english" ? "Go To Next" : "அடுத்தது"}
              </Button>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #A2A2A2",
              display: "flex",
              marginTop: "2%",
              flexDirection: "column",
              width: "100%",
              borderRadius: "10px",
              padding: "1%",
            }}
          >
            <div className="scores">
              <div style={{ width: "70%" }}>
                {data.map((datas, index) => {
                  return (
                    <div key={index} style={{ padding: "1%" }}>
                      <p>
                        {datas.number}.{datas.question}
                      </p>
                      {datas.image ? (
                        <>
                          <img
                            src={`data:image/jpeg;base64,${datas.image}`}
                            style={{ width: "30%", height: "100px" }}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {datas.answeroption.map((data, index) => (
                        <div
                          key={index}
                          className={data.answer ? "radiotrue" : "radiofalse"}
                        >
                          <input
                            name={"resultRdoName-" + datas.number + "-" + index}
                            id={"resultRdo-" + datas.number + "-" + index}
                            type="radio"
                            value={data.label}
                            // checked={true}
                            checked={resultPage(datas.number, index)}
                            onChange={handleChange}
                            onClick={() => handlebutton(data.ans)}
                          />
                          <span
                            style={{
                              marginLeft: "2%",
                              // color: "green",
                            }}
                            className={data.ans ? "labeltrue" : "labelfalse"}
                          >
                            {data.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
              <div
                className="crt-wrg"
                // style={{
                //   width: "41%",
                //   border: "1px solid black",
                //   borderRadius: "5px",
                //   height: "300px",
                // }}
              >
                <div className="inner-crt-wrg">
                  <div className="crt-wrg-container">
                    <div className="d-flex">
                      <div
                        className="circle-img-crt-wrg"
                        style={{
                          // width: "30px",
                          height: "20px",
                          borderRadius: "100%",
                          backgroundColor: "green",
                          // marginTop: "4%",
                          textAlign: "center",
                        }}
                      >
                        <img src={Correct} style={{ marginTop: "-40%" }} />
                      </div>
                      <p
                        style={{
                          marginLeft: "13%",
                          marginBottom: "3%",
                          fontSize: "smaller",
                          marginTop: "4%",
                        }}
                      >
                        {language == "english" ? "Correct" : "சரி"}
                      </p>
                    </div>
                    <div className="d-flex">
                      <div
                        className="circle-img-crt-wrg"
                        style={{
                          // width: "30px",
                          height: "20px",
                          borderRadius: "100%",
                          backgroundColor: "#A94141",
                          marginTop: "4%",
                          textAlign: "center",
                        }}
                      >
                        <img src={Wrong} style={{ marginTop: "-40%" }} />
                      </div>
                      <p
                        style={{
                          marginLeft: "13%",
                          marginBottom: "3%",
                          fontSize: "smaller",
                          marginTop: "4%",
                        }}
                      >
                        {language == "english" ? "Wrong" : "தவறு"}
                      </p>
                    </div>
                    <div className="d-flex">
                      <div
                        className="circle-img-not"
                        style={{
                          // width: "24px",
                          height: "20px",
                          borderRadius: "100%",
                          backgroundColor: "#A2A2A2",
                          marginTop: "4%",
                          textAlign: "center",
                        }}
                      >
                        <img src={Notans} style={{ marginTop: "-40%" }} />
                      </div>
                      {language == "english" ? (
                        <p
                          style={{
                            marginLeft: "10%",
                            marginBottom: "3%",
                            width: "100px",
                            fontSize: "smaller",
                            marginTop: "4%",
                          }}
                        >
                          Not answered
                        </p>
                      ) : (
                        <p
                          style={{
                            marginLeft: "5%",
                            marginBottom: "3%",
                            width: "150px",
                            fontSize: "11px",
                            marginTop: "2%",
                          }}
                        >
                          பதில் சொல்லவில்லை
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    // className="numbers"
                    style={{
                      paddingRight: "1%",
                    }}
                  >
                    <div className="finall">
                      {data.map((value, index) => (
                        <button
                          key={index}
                          onClick={() => selectedNum(index)}
                          className={roundbtn(index)}
                        >
                          {value.number}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssesmentResult;
