import React from "react";
import "./styles/practise.scss";
import { useNavigate } from "react-router-dom";

function Practise({ dataPageValue, title, id }) {
  const navigate = useNavigate();
  const language = localStorage.getItem("lang") || "en";

  console.log(title, "dataPValue");

  const PractisePage = () => {
    navigate("/practise_page", {
      state: { data: dataPageValue, title: title, id: id },
    });
  };

  return (
    <div className="practise-full-container">
      <p className="practise-header">
        {language == "en" ? "Practice Instructions" : "பயிற்சி வழிமுறைகள்"}
      </p>
      <p className="practise-content">
        {language == "en"
          ? `The quizzes consists of questions carefully designed to help you
        self-assess your comprehension of the information presented on the
        topics covered in the module. No data will be collected on the website
        regarding your responses or how many times you take the quiz.
         `
          : `வினாடி வினாக்கள் உங்களுக்கு உதவும் வகையில் கவனமாக வடிவமைக்கப்பட்ட கேள்விகளைக் கொண்டுள்ளது
        இல் வழங்கப்பட்ட தகவலின் உங்கள் புரிதலை சுய மதிப்பீடு செய்யுங்கள்
        தொகுதியில் உள்ள தலைப்புகள். இணையதளத்தில் எந்த தகவலும் சேகரிக்கப்படாது
        உங்கள் பதில்கள் அல்லது வினாடி வினாவை எத்தனை முறை எடுக்கிறீர்கள்.`}
        <br></br>
        {language == "en"
          ? `Each
          question in the quiz is of multiple-choice or true or false format.
          Read each question carefully, and click on the button next to your
          response that is based on the information covered on the topic in the
          module. Each correct or incorrect response will result in appropriate
          feedback immediately at the bottom of the screen.`
          : ` ஒவ்வொன்றும்
          வினாடி வினாவில் உள்ள கேள்வி பல தேர்வு அல்லது உண்மை அல்லது தவறான வடிவத்தில் உள்ளது.
          ஒவ்வொரு கேள்வியையும் கவனமாகப் படித்து, உங்களுக்கு அடுத்துள்ள பொத்தானைக் கிளிக் செய்யவும்
          என்ற தலைப்பில் உள்ள தகவலின் அடிப்படையில் பதில்
          தொகுதி. ஒவ்வொரு சரியான அல்லது தவறான பதில் பொருத்தமானதாக இருக்கும்
          திரையின் அடிப்பகுதியில் உடனடியாக பின்னூட்டம்.`}
        <br></br>
        {language == "en"
          ? `After responding to a
          question, click on the Next Question button at the bottom to go to the
          next question. After responding to the 8th question, click on Close on
          the top of the window to exit the quiz.`
          : `பதிலளித்த பிறகு a
          கேள்வி, என்பதற்குச் செல்ல கீழே உள்ள அடுத்த கேள்வி பொத்தானைக் கிளிக் செய்க
          அடுத்த கேள்வி. 8வது கேள்விக்கு பதிலளித்த பிறகு, Close on என்பதைக் கிளிக் செய்யவும்
          வினாடி வினாவிலிருந்து வெளியேற சாளரத்தின் மேல்.`}
        <br></br>
        {language == "en"
          ? `If you select an incorrect
          response for a question, you can try again until you get the correct
          response. If you retake the quiz, the questions and their respective
          responses will be randomized.The total score for the quiz is based on
          your responses to all questions.`
          : `நீங்கள் தவறான ஒன்றைத் தேர்ந்தெடுத்தால்
          ஒரு கேள்விக்கான பதில், நீங்கள் சரியானதைப் பெறும் வரை மீண்டும் முயற்சி செய்யலாம்
          பதில் நீங்கள் வினாடி வினா, கேள்விகள் மற்றும் அவைகளை மீண்டும் எடுத்தால்
          பதில்கள் சீரற்றதாக மாற்றப்படும்.`}
        <br></br>
        {language == "en"
          ? `If you respond incorrectly to a
          question or retake a question again and get the correct response, your
          quiz score will reflect it appropriately. However, your quiz will not be
          graded, if you skip a question or exit before responding to all the
          questions.`
          : ` வினாடி வினாவின் மொத்த மதிப்பெண் அடிப்படையிலானது
          அனைத்து கேள்விகளுக்கும் உங்கள் பதில்கள். நீங்கள் தவறாக பதிலளித்தால் a
          கேள்வி அல்லது ஒரு கேள்வியை மீண்டும் எடுத்து சரியான பதிலைப் பெறுங்கள், உங்களுடைய
          வினாடி வினா மதிப்பெண் அதை சரியாக பிரதிபலிக்கும். இருப்பினும், உங்கள் வினாடி வினா இருக்காது
          ஒரு கேள்வியைத் தவிர்த்தால் அல்லது அனைத்திற்கும் பதிலளிப்பதற்கு முன் வெளியேறினால், தரப்படுத்தப்பட்டது
          கேள்விகள்.`}
      </p>

      <button className="startpractise-btn" onClick={PractisePage}>
        {language == "en" ? "Start Practice" : "பயிற்சியைத் தொடங்குங்கள்"}
      </button>
    </div>
  );
}

export default Practise;
