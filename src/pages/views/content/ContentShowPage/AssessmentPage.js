import React from "react";
import "../styles/AssessmentPage.scss";
import { useNavigate } from "react-router-dom";

function AssessmentPage({assessmentData,heading}) {
  const navigate = useNavigate();
  return (
    <div className="practise-full-container">
      <p className="practise-header">Assessment Instructions</p>
      <p className="practise-content">
        The quizzes consists of questions carefully designed to help you
        self-assess your comprehension of the information presented on the
        topics covered in the module. No data will be collected on the website
        regarding your responses or how many times you take the quiz.
        <br></br>Each question in the quiz is of multiple-choice or true or
        false format. Read each question carefully, and click on the button next
        to your response that is based on the information covered on the topic
        in the module. Each correct or incorrect response will result in
        appropriate feedback immediately at the bottom of the screen.
        <br></br>After responding to a question, click on the Next Question
        button at the bottom to go to the next question. After responding to the
        8th question, click on Close on the top of the window to exit the quiz.
        <br></br>If you select an incorrect response for a question, you can try
        again until you get the correct response. If you retake the quiz, the
        questions and their respective responses will be randomized.The total
        score for the quiz is based on your responses to all questions.
        <br></br>If you respond incorrectly to a question or retake a question
        again and get the correct response, your quiz score will reflect it
        appropriately. However, your quiz will not be graded, if you skip a
        question or exit before responding to all the questions.
      </p>

      <button
        className="startpractise-btn"
        onClick={() => navigate("/assessment_text",{state:{data:assessmentData,heading:heading}})}
      >
        Start Test
      </button>
    </div>
  );
}

export default AssessmentPage;
