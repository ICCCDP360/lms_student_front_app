import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import VideoComplete from "../../../../assets/images/videocomplete.svg";
import PdfComplete from "../../../../assets/images/pdfcomplete.svg";
import PractiseSelect from "../../../../assets/images/practiseselect.svg";
import AssestUnSelect from "../../../../assets/images/assestunselect.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./PractisePage.scss";
import PractisepageResult from "./PractisepageResult";

// import practiseServices from "../../../../services/PractiseContent";
// import { PracticeContent } from "../../../../services/PractiseContent";
// import { AssesmentContent } from "../../../../services/assesmentContent";
import assesemnetServices from "../../../../services/assesmentContent";
const answerlistArray = [];

function PractisePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [selected, setSelected] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [hint, setHint] = useState(false);
  const { state } = useLocation();
  const language = localStorage.getItem("lang") || "en";

  const data = state.data;

  const title = state.title;

  console.log(title, "kkkk");

  const id = state.id;

  const [images] = useState(true);

  const [explanation] = useState(true);

  const [hide, sethide] = useState(true);

  const [answercheck, setAnswercheck] = useState(true);

  const [staticData, setStaticData] = useState(0);

  const [disable, setDisable] = useState(true);

  const [assesmentData, setAssesmentData] = useState([]);

  console.log(assesmentData, "manoj");

  const navigate = useNavigate();

  // useEffect(() => {
  //   // return new Promise((resolve, reject) => {
  //   practiseServices
  //     .PracticeContent(id)
  //     .then((res) => {
  //       // resolve(res.data);
  //       setAssesmentData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // reject(false);
  //     });
  //   // });
  // });

  const selectedNum = (index) => {
    setHint(false);
    setDisable(true);
    setAnswercheck(true);
    setCurrentQuestion(index - 1);
    sethide(true);
    setStaticData(index - 1);
    setTimeout(() => {
      checkedans(index);
    }, 500);
  };
  const checkedans = (index) => {
    var object = answerlistArray.find((o) => o.questionNo == index);
    if (object != undefined) {
      var optionNo = object.optionNo;
      var datas = document.getElementById("rdo-" + index + "-" + optionNo);
      datas.checked = true;
    }
  };
  const handleChange = (event) => {
    const selectedOption = event.target.value;

    setSelectedOptions([]);
    setSelectedOptions([selectedOption]);

    // setSelected(event.target.value);
  };

  const handlebutton = (ans, index) => {
    if (ans === true) {
      setScore(score + 1);
    }
    setDisable(false);
    const pos = answerlistArray.findIndex((obj) => obj.questionNo === index);
    if (pos >= 0) {
      answerlistArray.splice(pos, 1);
    }
    optionSelect(index);
  };

  const handleprev = () => {
    const prev = currentQuestion - 1;
    sethide(true);
    setAnswercheck(true);
    if (prev < data.length) {
      setCurrentQuestion(prev);
    } else {
      setShowScore(true);
    }
    setTimeout(() => {
      checkedans(currentQuestion);
    }, 500);
  };

  const handleData = () => {
    setDisable(true);
    setHint(false);
    const nextQuetions = currentQuestion + 1;

    sethide(true);
    setAnswercheck(true);
    if (nextQuetions < data.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
    setTimeout(() => {
      uncheckedOptions(nextQuetions + 1);
    }, 500);

    setSelectedOptions([]);
  };

  const optionSelect = (index) => {
    var isSelected = false;
    var chkOptionsSelected = document.getElementsByName("rdo-" + index);
    for (var i = 0; i < chkOptionsSelected.length; i++) {
      if (chkOptionsSelected[i].checked) {
        var answerElement = {
          questionNo: index,
          optionNo: i,
        };
        isSelected = true;
        answerlistArray.push(answerElement);
        break;
      }
    }
    if (isSelected) {
      document.getElementById("qnno-" + index).className = "isQnRead";
    }
  };
  const checkValue = () => {
    var curQuestion = currentQuestion + 1;

    var currentQuesObj = data[currentQuestion].answeroption;
    var correctAnswerId = findCorrectAnswer(currentQuesObj);
    var userAnswerId = findUserAnswer(curQuestion);

    setRadiobuttonColor(correctAnswerId, userAnswerId, curQuestion);
    setAnswercheck(false);

    setHint(true);
    setStaticData(staticData + 1);
  };

  // const findAnswer = (answerSet) => {
  function findCorrectAnswer(answerSet) {
    var answerId = "";
    for (var i = 0; i < answerSet.length; i++) {
      if (answerSet[i].answer) {
        answerId = answerSet[i].id;
        break;
      }
    }
    return answerId;
  }

  function findUserAnswer(currentQuestionNo) {
    var checked = "";
    var userAnswerId = "";
    for (var i = 1; i <= 4; i++) {
      checked = document.getElementById(
        "rdo-" + currentQuestionNo + "-" + i
      ).checked;
      if (checked) {
        userAnswerId = i;
        break;
      }
    }
    return userAnswerId;
  }

  function uncheckedOptions(currentQuestionNo) {
    for (var i = 1; i <= 4; i++) {
      document.getElementById(
        "rdo-" + currentQuestionNo + "-" + i
      ).style.background = "";
    }
  }

  function setRadiobuttonColor(
    userAnswerId,
    correctAnswerId,
    currentQuestionNo
  ) {
    let Option = selectedOptions;
    let dom = document.getElementById(
      "rdo-" + currentQuestionNo + "-" + userAnswerId
    );
    let crtAns = dom.value;
    dom.name = "rdo-exact";
    Option.push(crtAns);
    setSelectedOptions(Option);

    if (userAnswerId != correctAnswerId) {
      document.getElementById(
        "div-" + currentQuestionNo + "-" + userAnswerId
      ).checked = true;
      document.getElementById(
        "div-" + currentQuestionNo + "-" + correctAnswerId
      ).className = "radiofalse";

      document.getElementById(
        "div-" + currentQuestionNo + "-" + userAnswerId
      ).className = "radiotrue";
      document.getElementById(
        "div-" + currentQuestionNo + "-" + userAnswerId
      ).checked = true;
    }
  }

  useEffect(() => {
    assesemnetServices
      .AssesmentContent(id)
      .then((res) => {
        setAssesmentData(res.data);
        // console.log(res.data, "hello");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const assesmentDatas = (id, data, title, user) => {
    // console.log(id, data, title, user, "333");
    navigate("/exam", {
      state: { id: id, data: data, title: title, user: user },
    });
  };

  const resultPage = (questionNo, optNo) => {
    var originalAns = false;
    var userAns = false;
    var questionSet = data.find((obj) => obj.number == questionNo);
    var optionSet = questionSet.answeroption[optNo].answer;
    originalAns = optionSet;
    var obj = answerlistArray.find((o) => o.questionNo == questionNo);
    if (obj != undefined) {
      var opt = obj.optionNo;
      if (opt == optNo) {
        userAns = true;
      } else {
        userAns = false;
      }
    } else {
      userAns = false;
    }

    if (userAns && originalAns) {
      return true;
    } else if (userAns && !originalAns) {
      return true;
    } else if (!userAns && originalAns) {
      return true;
    } else if (!userAns && !originalAns) {
      return false;
    }
  };

  return (
    <div className="practise-page-full-container">
      <div className="practise-page-inside-container">
        <p className="practise-page-header">
          {/* {language == "en" ? "Digestive System" : "செரிமான அமைப்பு"} */}
          {title}
        </p>

        <div className="practise-page-subcontainer">
          {images ? (
            <>
              <div>
                {showScore ? (
                  <div>
                    <div className="showscore-container">
                      <div className="showscore-inside-container">
                        <div className="show-header-img-container">
                          <img src={VideoComplete} />
                          <p>{language == "en" ? "Video" : "வீடியோ"}</p>
                        </div>
                        <div className="show-header-img-container">
                          <img src={PdfComplete} />
                          <p>PDF</p>
                        </div>
                        <div className="show-header-img-container">
                          <img src={PractiseSelect} />
                          <p>
                            {language == "en" ? "Practice" : "பயிற்சி"}
                          </p>
                        </div>
                        {/* {console.log(assesmentData, "333")} */}
                        <div
                          className="show-header-img-container"
                          onClick={() =>
                            assesmentDatas(
                              "assesment",
                              assesmentData[0].assessmentQuestions,
                              assesmentData[0].assessmentTitle,
                              id
                            )
                          }
                        >
                          <img src={AssestUnSelect} />
                          <p>
                            {language == "en" ? "Assessment" : "மதிப்பீடு"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <PractisepageResult
                      data={data}
                      user={id}
                      handleChange={handleChange}
                      handlebutton={handlebutton}
                      resultPage={resultPage}
                    />
                  </div>
                ) : (
                  <>
                    <div className="practise-container-sm">
                      <div className="questionpage-practice-container">
                        <div
                          // id={"qn-" + data[currentQuestion].number}
                          style={{ padding: "1%" }}
                        >
                          {data
                            .slice(currentQuestion, currentQuestion + 1)
                            ?.map((item, index) => {
                              return (
                                <div key={index}>
                                  {data[currentQuestion]?.number}.
                                  {data[currentQuestion]?.question}
                                </div>
                              );
                            })}
                          <p
                            style={{
                              fontSize: "18px",
                              fontWeight: "400",
                            }}
                          ></p>

                          {hide ? (
                            <div style={{ padding: "2%", paddingBottom: "0%" }}>
                              {data[currentQuestion]?.answeroption?.map(
                                (item, index) => {
                                  return (
                                    <div
                                      className={
                                        "radio-normal " +
                                        "rdo-" +
                                        data[currentQuestion]?.number +
                                        "-" +
                                        (index + 1)
                                      }
                                      id={
                                        "div-" +
                                        data[currentQuestion]?.number +
                                        "-" +
                                        (index + 1)
                                      }
                                      key={index}
                                      style={{ padding: "1%" }}
                                    >
                                      <input
                                        name={
                                          "rdo-" + data[currentQuestion]?.number
                                        }
                                        id={
                                          "rdo-" +
                                          data[currentQuestion]?.number +
                                          "-" +
                                          (index + 1)
                                        }
                                        style={{ cursor: "pointer" }}
                                        type="radio"
                                        value={item?.label}
                                        checked={selectedOptions.includes(
                                          item?.label
                                        )}
                                        // checked={selected === item?.label}
                                        onChange={handleChange}
                                        onClick={() =>
                                          handlebutton(
                                            item?.ans,
                                            data[currentQuestion]?.number
                                          )
                                        }
                                      />
                                      <span style={{ marginLeft: "2%" }}>
                                        {item?.label}
                                      </span>
                                    </div>
                                  );
                                }
                              )}
                              <hr />
                            </div>
                          ) : (
                            <></>
                          )}

                          <div
                            style={{
                              paddingLeft: "2%",
                              paddingRight: "2%",
                            }}
                          >
                            {hide ? (
                              <>
                                {" "}
                                <div
                                  onClick={() => setHint(!hint)}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                  }}
                                >
                                  <p
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {hint ? "Explanation" : "Hint"}
                                  </p>
                                </div>
                                {hint ? (
                                  <p
                                    style={{
                                      width: "80%",
                                      fontSize: "18px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {data[currentQuestion]?.hint}
                                  </p>
                                ) : null}
                              </>
                            ) : (
                              <>
                                {" "}
                                <p
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {language == "en"
                                    ? "Explanation"
                                    : "விளக்கம்"}
                                </p>
                                {explanation ? (
                                  <p className="explanation-practise">
                                    {data[currentQuestion]?.Explanation}
                                  </p>
                                ) : null}
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        className="count-side-practise"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "10px",

                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "2%",
                            }}
                          >
                            <p
                              style={{
                                marginBottom: "0px",
                                fontSize: "18px",
                                fontWeight: "400",
                              }}
                            >
                              {language == "en"
                                ? "Questions"
                                : "கேள்விகள்"}
                            </p>
                          </div>
                          <div
                            style={{
                              padding: "2%",
                            }}
                          >
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {data.map((value, index) => (
                                <button
                                  id={"qnno-" + value.number}
                                  key={index}
                                  onClick={() => selectedNum(value.number)}
                                  className="active"
                                >
                                  {value.number}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-button">
                      {currentQuestion == 0 ? (
                        <Button
                          disabled
                          // style={{ cursor: "pointer" }}
                          className="prev-btn"
                          onClick={handleprev}
                        >
                          {" "}
                          {language == "en" ? "Prev" : "முந்தைய"}
                        </Button>
                      ) : (
                        <Button
                          style={{ cursor: "pointer" }}
                          className="prev-btn"
                          onClick={handleprev}
                        >
                          {" "}
                          {language == "en" ? "Prev" : "முந்தைய"}
                        </Button>
                      )}

                      {answercheck ? (
                        <>
                          <button
                            className={
                              disable ? "check-answer1" : "check-answer"
                            }
                            onClick={() => checkValue()}
                          >
                            {language == "en"
                              ? "Check answer"
                              : "சரிபார்க்கவும்"}
                          </button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <button
                            className="data-next"
                            onClick={() => handleData()}
                          >
                            {language == "en" ? "Next" : "அடுத்தது"}
                          </button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <div>
              <div
                style={{
                  backgroundColor: "#F5F5F5",
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PractisePage;
