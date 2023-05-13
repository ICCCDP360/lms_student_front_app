import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./assesment.scss";
import "react-circular-progressbar/dist/styles.css";
import Modal from "react-bootstrap/Modal";
import { useLocation } from "react-router-dom";
import vector from "../../../../assets/images/Vector.svg";
import AssesmentResult from "./AssesmentResult";
import { useRef } from "react";
import { useEffect } from "react";
import assesemnetServices from "../../../../services/assesmentContent";
// import { AssesmentResultPage } from "../../../../services/assesmentContent";
const answerlistArray = [];

var isNextDisabled = "";
// var isSkipDisabled = "";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function Assessment() {
  const { state } = useLocation();
  const totalTime = 360;
  const [countdown, setCountDown] = useState(totalTime);
  const [report, setReport] = useState(false);
  // console.log(state, "time");
  const handleReport = () => {
    setReport(true);
  };
  const timerID = useRef();

  useEffect(() => {
    timerID.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerID.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerID.current);
      // alert("End");
      setShow1(true);
    }
  }, [countdown]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const language = localStorage.getItem("lang") || "en";
  const [skc, setSkc] = useState(0);
  const [submittedDataCount, setSubmittedDataCount] = useState([]);
  const [skippedQuestion, setSkippedQuestion] = useState([]);
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const data = state.data || state[0].assessmentQuestions;
  const totalQuestions = data.length;

  const title = state.title || state[0].assessmentThumnail;
  const [images] = useState(true);
  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);

  const selectedNum = (index) => {
    setCurrentQuestion(index - 1);
    // document.getElementById("qnno-" + index).className = "isQnRead";
    setTimeout(() => {
      checkedans(index);
    }, 500);
    DisbaledBtn(index);
    // console.log(answerlistArray);
  };

  const checkedans = (index) => {
    var object = answerlistArray.find((o) => o.questionNo == index);
    if (object != undefined) {
      var optionNo = object.optionNo;
      document.getElementById("rdb-" + index + "-" + optionNo).checked = true;
      // var datas = document.getElementById("rdb-" + index + "-" + optionNo);
      // datas.checked = true;
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
    let answeredData = {
      question: data[currentQuestion].question,
      answer: event.target.value,
    };
    setAnsweredQuestion((answeredQuestion) => [
      ...answeredQuestion,
      answeredData,
    ]);
    let indexAnsweredQuestion = answeredQuestion.findIndex(
      (obj) => obj.question == data[currentQuestion].question
    );
    let temp =
      indexAnsweredQuestion > -1
        ? answeredQuestion.splice(indexAnsweredQuestion, 1)
        : answeredQuestion;
    let skippedCount = totalQuestions - temp.length || answeredQuestion.length;
    skippedCount =
      skippedQuestion.length > 0
        ? skippedCount + skippedQuestion
        : skippedCount;

    let correctIndex = data[currentQuestion].answeroption.findIndex(
      (obj) => obj.answer == true
    );
    let count =
      data[currentQuestion].answeroption[correctIndex].label ==
      event.target.value
        ? 1
        : 0;
    count == 1
      ? setCorrectAnswerCount(correctAnswerCount + count)
      : setCorrectAnswerCount(correctAnswerCount);

    setSkc(skippedCount);
  };

  const handlebutton = (answer, index) => {
    if (answer === true) {
      setScore(score + 1);
    }
    const pos = answerlistArray.findIndex((obj) => obj.questionNo === index);
    if (pos >= 0) {
      answerlistArray.splice(pos, 1);
    }
    optionSelect(index);
  };
  const handleprev = (index) => {
    const prev = currentQuestion - 1;
    let skippedCount = totalQuestions - answeredQuestion.length;
    setSkc(skippedCount);

    if (prev < data.length) {
      setCurrentQuestion(prev);
    } else {
      setShowScore(true);
    }
    setTimeout(() => {
      checkedans(currentQuestion);
    }, 500);
    DisbaledBtn(index - 1);
  };

  const DisbaledBtn = (index) => {
    if (index == data.length) {
      isNextDisabled = "disabled";
    } else {
      isNextDisabled = "";
    }
  };
  function isQuestionState(index) {
    var isSelected = false;
    for (var i = 0; i <= 3; i++) {
      isSelected = document.getElementById("rdb-" + index + "-" + i).checked;
      if (isSelected) {
        break;
      }
    }

    if (isSelected) {
      document.getElementById("qnno-" + index).className = "isQnRead";
      let skippedCount = totalQuestions - answeredQuestion.length;
      setSkc(skippedCount);
    } else {
      // let skippedCount = totalQuestions - answeredQuestion.length;
      // skippedCount = skippedCount + skippedQuestion.length;
      // setSkc(skippedCount);
      document.getElementById("qnno-" + index).className = "isQnNotvisit";
    }
  }
  const handledata = (index) => {
    isQuestionState(index);
    // document.getElementById("qnno-" + index).className = "isQnRead";

    const nextQuetions = currentQuestion + 1;
    let skippedCount = totalQuestions - answeredQuestion.length;
    setSkc(skippedCount);

    if (nextQuetions < data.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
    DisbaledBtn(index + 1);
    // optionSelect(index);
    setTimeout(() => {
      checkedans(nextQuetions + 1);
    }, 500);
  };
  const disableBtnByName = (btnName) => {
    if (btnName == "Skip") {
      // console.log(btnName);
    }
  };

  const optionSelect = (index) => {
    var isSelected = false;
    var chkOptionsSelected = document.getElementsByName("rdb-" + index);
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
      let skippedCount = totalQuestions - answeredQuestion.length;
      setSkc(skippedCount);
      document.getElementById("qnno-" + index).className = "isQnRead";
    } else {
      document.getElementById("qnno-" + index).className = "isQnNotvisit";
    }

    disableBtnByName("Skip");
  };
  const skipdata = (index) => {
    document.getElementById("qnno-" + index).className = "isSkipped";

    const nextQuetions = currentQuestion + 1;

    let skippedData = {
      question_id: index,
      question: data[currentQuestion].question,
      selectedanswer: null,
    };
    setSkippedQuestion((skippedQuestion) => [...skippedQuestion, skippedData]);
    if (nextQuetions < data.length) {
      let skippedCount = totalQuestions - answeredQuestion.length;
      skippedCount = skippedCount + skippedQuestion.length;
      setSkc(skippedCount);
      setCurrentQuestion(nextQuetions);
    } else {
      // setShowScore(true);
      setShow(true);
      let skippedCount = totalQuestions - answeredQuestion.length;
      skippedCount = skippedCount + skippedQuestion.length;
      setSkc(skippedCount);
    }

    DisbaledBtn(index + 1);
    // document.getElementById("qnno-" + index).className = "isSkipped";

    // const nextQuetions = currentQuestion + 1;
    // let indexAnsweredQuestion = answeredQuestion.findIndex(
    //   (obj) => obj.question == data[currentQuestion].question
    // );
    // let temp =
    //   indexAnsweredQuestion > -1
    //     ? answeredQuestion.splice(indexAnsweredQuestion, 1)
    //     : answeredQuestion;

    // let skippedData = {
    //   question_id: index,
    //   question: data[currentQuestion].question,
    //   selectedanswer: null,
    // };
    // setSkippedQuestion((skippedQuestion) => [...skippedQuestion, skippedData]);
    // let submittedDataQuestion = submittedDataCount[0].attended.findIndex(
    //   (obj) => obj.question == data[currentQuestion].question
    // );
    // indexAnsweredQuestion > -1
    //   ? submittedDataCount[0].attended.splice(submittedDataQuestion, 1)
    //   : submittedDataCount[0].attended;
    // if (nextQuetions < data.length) {
    //   let skippedCount =
    //     totalQuestions - temp.length || answeredQuestion.length;
    //   skippedCount = skippedCount + skippedQuestion.length;
    //   setSkc(skippedCount);
    //   setCurrentQuestion(nextQuetions);
    // } else {
    //   // setShowScore(true);
    //   setShow(true);
    //   let skippedCount =
    //     totalQuestions - temp.length || answeredQuestion.length;
    //   skippedCount = skippedCount + skippedQuestion.length;
    //   skippedCount = skippedCount + skippedQuestion.length;

    //   setSkc(skippedCount);
    // }

    // DisbaledBtn(index + 1);
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

  const remainingTime = totalTime - countdown;
  const handlesubmit = () => {
    setShow1(false);
    setShowScore(true);
    setShow(false);
    let submittedData = {
      attended: answeredQuestion,
      notattended: skippedQuestion,
      user_id: localStorage.getItem("userDetails")._id,
    };
    setSubmittedDataCount((submittedDataCount) => [
      ...submittedDataCount,
      submittedData,
      formatTime(remainingTime),
    ]);
    let assessmentresultstoredata = {
      student_id: localStorage.getItem("userDetails")._id,
      assessment_id: state.id, //assessment_id,
      lang_type: "en", //lang,
      assessment_result: [
        {
          assessment_id: state.id,
          attended: answeredQuestion,
          not_attended: skippedQuestion,
          total_time_spent: formatTime(remainingTime),
        },
      ],
    };
    assesemnetServices
      .AssesmentResultPage(assessmentresultstoredata)
      .then(() => {});
  };
  const handleClose = () => {
    let skippedCount = totalQuestions - answeredQuestion.length;
    setSkc(skippedCount);
    setShow(false);
  };

  const handleClose1 = () => {
    let skippedCount = totalQuestions - answeredQuestion.length;
    setSkc(skippedCount);
    setShow1(false);
  };
  const handleShow = () => {
    let skippedCount = totalQuestions - answeredQuestion.length;
    setSkc(skippedCount);
    setShow(true);
  };

  const roundbtn = (index) => {
    var originalAns = "";
    var userAns = "";
    var obj = answerlistArray.find((o) => o.questionNo == index + 1);
    var questionSet = data.find((obj) => obj.number == index + 1);
    originalAns = questionSet.answeroption.findIndex((o) => o.answer == true);
    if (obj == undefined) {
      return "active notanswer";
    } else {
      userAns = obj.optionNo;
      if (userAns == originalAns) {
        return "active correct";
      } else {
        return "active wrong";
      }
    }
  };

  return (
    <div className="assesment-full-container">
      <Modal
        show={show}
        onHide={handleClose}
        style={{
          marginTop: "15%",
        }}
      >
        <Modal.Body>
          <div>
            <h6>
              {language == "en"
                ? "Conform your submission"
                : "உங்கள் சமர்ப்பிப்பை உறுதிப்படுத்தவும்"}
            </h6>
            <p>
              {language == "en"
                ? `You have not answered ` +
                  skc +
                  ` questions. Are you sure, you want to submit.`
                : `நீங்கள் ` +
                  skc +
                  ` கேள்விகளுக்கு பதிலளிக்கவில்லை. நீங்கள் நிச்சயமாக சமர்ப்பிக்க விரும்புகிறீர்களா?`}
            </p>
            <div>
              <Button
                variant="success"
                style={{
                  backgroundColor: "#03C4AD",
                  borderRadius: "15px",
                  border: "none",
                }}
                onClick={handlesubmit}
              >
                {language == "en" ? "Submit" : "சமர்ப்பிக்கவும்"}
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  border: "1px solid #03C4AD",
                  color: "#03C4AD",
                }}
                className="ms-3"
                onClick={handleClose}
              >
                {language == "en" ? "Cancel" : "ரத்து செய்"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={show1}
        onHide={handleClose1}
        style={{
          marginTop: "15%",
        }}
      >
        <Modal.Body>
          <div>
            <h6>
              {language == "en"
                ? "Conform your submission"
                : "உங்கள் சமர்ப்பிப்பை உறுதிப்படுத்தவும்"}
            </h6>
            <p>
              {language == "en"
                ? `Time Up` +
                  " " +
                  skc +
                  ` questions. Are you sure, you want to submit.`
                : `நீங்கள் ` +
                  skc +
                  ` கேள்விகளுக்கு பதிலளிக்கவில்லை. நீங்கள் நிச்சயமாக சமர்ப்பிக்க விரும்புகிறீர்களா?`}
            </p>
            <div>
              <Button
                variant="success"
                style={{
                  backgroundColor: "#03C4AD",
                  borderRadius: "15px",
                  border: "none",
                }}
                onClick={handlesubmit}
              >
                {language == "en" ? "Submit" : "சமர்ப்பிக்கவும்"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div
        style={{
          backgroundColor: "white",
          width: "96%",
          marginLeft: "2%",
          marginRight: "2%",
          padding: "3%",
        }}
      >
        <div style={{ backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0%",
            }}
          >
            <div
              style={{
                marginTop: "1%",
              }}
            ></div>
          </div>
          {images ? (
            <>
              <div>
                {showScore ? (
                  <AssesmentResult
                    data={data}
                    roundbtn={roundbtn}
                    // retaketest={retaketest}
                    resultPage={resultPage}
                    handlebutton={handlebutton}
                    selectedNum={selectedNum}
                    title={title}
                    resultdata={submittedDataCount}
                    correctAnswerCount={correctAnswerCount}
                  />
                ) : (
                  <div>
                    <div className="d-flex justify-content-between">
                      <h1 style={{ fontSize: "24px", fontWeight: "700" }}>
                        {/* {language == "en"
                          ? "Digestive System"
                          : "செரிமான அமைப்பு"} */}
                        {title}
                      </h1>

                      <button
                        style={{
                          backgroundColor: "#03C4AD",
                          border: "none",
                          borderRadius: "20px",
                          width: "80px",
                        }}
                        onClick={handleShow}
                      >
                        {language == "en" ? "Submit" : "சமர்ப்பிக்கவும்"}
                      </button>
                    </div>
                    <div className="assessment-question-container">
                      <div className="assessment-left-container">
                        <div>
                          <div>
                            {/* <p>qusetion {currentQuestion + 1}</p> */}
                            {/* {data.length} */}
                          </div>
                          <p style={{ fontSize: "18px", fontWeight: "400" }}>
                            {data[currentQuestion].number}.{" "}
                            {data[currentQuestion].question}
                          </p>
                          {data[currentQuestion].image ? (
                            <>
                              <img
                                src={`data:image/jpeg;base64,${data[currentQuestion].image}`}
                                style={{ width: "30%", height: "100px" }}
                              />
                            </>
                          ) : null}

                          <div style={{ padding: "2%", paddingBottom: "0%" }}>
                            {data[currentQuestion].answeroption.map(
                              (answeroption, index) => {
                                return (
                                  <div key={index} style={{ padding: "1%" }}>
                                    <input
                                      name={
                                        "rdb-" + data[currentQuestion].number
                                      }
                                      id={
                                        "rdb-" +
                                        data[currentQuestion].number +
                                        "-" +
                                        index
                                      }
                                      style={{ cursor: "pointer" }}
                                      type="radio"
                                      value={answeroption.label}
                                      checked={selected === answeroption.label}
                                      onChange={handleChange}
                                      onClick={() =>
                                        handlebutton(
                                          answeroption.answer,
                                          data[currentQuestion].number
                                        )
                                      }
                                    />
                                    <span style={{ marginLeft: "2%" }}>
                                      {answeroption.label}
                                    </span>
                                  </div>
                                );
                              }
                            )}
                          </div>
                          <div style={{ display: "flex", marginTop: "150px" }}>
                            <img src={vector} alt="" />
                            <p
                              style={{
                                marginTop: "11px",
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                              onClick={handleReport}
                            >
                              Report an issue
                            </p>
                          </div>
                          <Modal show={report} style={{ marginTop: "16%" }}>
                            <Modal.Header
                              closeButton
                              onHide={() => setReport(false)}
                            >
                              Report an Issue
                            </Modal.Header>
                            <Modal.Body>
                              <p>Question has an error</p>
                              <p>Options has an error</p>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>

                      <div
                        className="assessment-right-container"
                        style={{
                          border: "1px solid #A2A2A2",
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
                              {language == "en"
                                ? "Remaining Timing:"
                                : "மீதமுள்ள நேரம்:"}
                            </p>
                            <p style={{ marginBottom: "0px" }}>
                              {/* {`${time.minutes
                                .toString()
                                .padStart(2, "0")}:${time.seconds
                                .toString()
                                .padStart(2, "0")}`}{" "} */}
                              {formatTime(countdown)}
                            </p>
                          </div>
                          <div
                            style={{
                              padding: "1% 10px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "18px",
                                fontWeight: "400",
                                // marginBottom: "0px",
                                margin: "5px",
                              }}
                            >
                              {language == "en"
                                ? "Questions"
                                : "கேள்விகள்"}
                            </p>
                            <div className="row d-flex gap-2 ">
                              {data.map((value, index) => (
                                <div
                                  key={index}
                                  className="col-1"
                                  style={{
                                    // border: "1px solid red",
                                    width: "11%",
                                    margin: "4px",
                                  }}
                                >
                                  <button
                                    id={"qnno-" + value.number}
                                    onClick={() => selectedNum(value.number)}
                                    className="active"
                                  >
                                    {value.number}
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {language == "en" ? (
                          <div className="right-answer-check">
                            <div style={{ display: "flex" }}>
                              <div
                                className="dot-change"
                                style={{
                                  padding: "1%",
                                  backgroundColor: "#E1F1E7",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "100%",
                                  border: "1px solid #5BA074",
                                }}
                              ></div>
                              <p
                                style={{
                                  fontWeight: "500",
                                  fontSize: "15px",
                                  marginLeft: "5px",
                                }}
                              >
                                {language == "en"
                                  ? "Answered"
                                  : "பதிலளிக்கப்பட்டது"}
                              </p>
                            </div>
                            <div style={{ display: "flex" }}>
                              <div
                                className="dot-change"
                                style={{
                                  padding: "1%",
                                  backgroundColor: "white",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "100%",
                                  border: "1px solid #A2A2A2",
                                }}
                              ></div>
                              <p
                                style={{
                                  fontWeight: "500",
                                  fontSize: "15px",
                                  marginLeft: "5px",
                                }}
                              >
                                {language == "en"
                                  ? "Not visited"
                                  : "பார்வையிடவில்லை"}
                              </p>
                            </div>
                            <div style={{ display: "flex" }}>
                              <div
                                className="dot-change"
                                style={{
                                  padding: "1%",
                                  backgroundColor: "#A2A2A2",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "100%",
                                }}
                              ></div>
                              <p
                                style={{
                                  fontWeight: "500",
                                  fontSize: "15px",
                                  marginLeft: "5px",
                                }}
                              >
                                {language == "en"
                                  ? "Skipped"
                                  : "தவிர்க்கப்பட்டது"}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div style={{ padding: "2%" }}>
                            <div style={{ display: "flex" }}>
                              <div
                                style={{
                                  padding: "1%",
                                  backgroundColor: "#E1F1E7",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "100%",
                                  border: "1px solid #5BA074",
                                  marginTop: "1%",
                                }}
                              ></div>
                              <p
                                style={{
                                  fontWeight: "500",
                                  fontSize: "16px",
                                  marginLeft: "10px",
                                }}
                              >
                                {language == "en"
                                  ? "Answered"
                                  : "பதிலளிக்கப்பட்டது"}
                              </p>
                            </div>
                            <div style={{ display: "flex" }}>
                              <div
                                style={{
                                  padding: "1%",
                                  backgroundColor: "white",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "100%",
                                  border: "1px solid #A2A2A2",
                                  marginTop: "1%",
                                }}
                              ></div>
                              <p
                                style={{
                                  fontWeight: "500",
                                  fontSize: "16px",
                                  marginLeft: "10px",
                                }}
                              >
                                {language == "en"
                                  ? "Not visited"
                                  : "பார்வையிடவில்லை"}
                              </p>
                            </div>
                            <div style={{ display: "flex" }}>
                              <div
                                style={{
                                  padding: "1%",
                                  backgroundColor: "#A2A2A2",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "100%",
                                  marginTop: "1%",
                                }}
                              ></div>
                              <p
                                style={{
                                  fontWeight: "500",
                                  fontSize: "16px",
                                  marginLeft: "10px",
                                }}
                              >
                                {language == "en"
                                  ? "Skipped"
                                  : "தவிர்க்கப்பட்டது"}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <div className="data-button-assesment">
                        {currentQuestion == 0 ? (
                          <Button
                            disabled
                            onClick={handleprev}
                            style={{
                              color: "#03C4AD",
                              backgroundColor: "white",
                              borderColor: "#03C4AD",
                              borderRadius: "20px",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            {language == "en" ? "Prev" : "முந்தைய"}
                          </Button>
                        ) : (
                          <Button
                            className="data-prev-btn"
                            onClick={handleprev}
                            style={{
                              color: "#03C4AD",
                              backgroundColor: "white",
                              borderColor: "#03C4AD",
                              borderRadius: "20px",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            {language == "en" ? "Prev" : "முந்தைய"}
                          </Button>
                        )}

                        <div className="data-bot-btn">
                          <Button
                            style={{
                              borderRadius: "20px",
                              background: "none",
                              color: "skyblue",
                            }}
                            variant="info"
                            // disabled={isSkipDisabled}
                            onClick={() =>
                              skipdata(data[currentQuestion].number)
                            }
                          >
                            {" "}
                            {language == "en" ? "Skip" : "தவிர்க்கவும் "}
                          </Button>
                          {data.length - 1 <= currentQuestion + 0 ? (
                            <></>
                          ) : (
                            <>
                              <Button
                                variant="outline-info"
                                disabled={isNextDisabled}
                                style={{
                                  marginLeft: "7%",
                                  backgroundColor: "#03C4AD",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "20px",
                                }}
                                onClick={() =>
                                  handledata(data[currentQuestion].number)
                                }
                              >
                                {language == "en" ? "Next" : "அடுத்த"}
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Assessment;
