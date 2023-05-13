import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import assesemnetServices from "../../../../services/assesmentContent";

function PractisepageResult({
  data,
  user,
  handleChange,
  handlebutton,
  resultPage,
}) {
  const language = localStorage.getItem("lang") || "en";
  const [assesmentData, setAssesmentData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    assesemnetServices
      .AssesmentContent(user)
      .then((res) => {
        setAssesmentData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const assesmentDatas = (id, data, title, user) => {
    navigate("/exam", {
      state: { id: id, data: data, title: title, user: user },
    });
  };

  return (
    <div>
      <div className="result-show-bottom-container">
        <div className="result-show-header-container">
          <h6 className="result-show-heading">
            {language == "en"
              ? "You have successfully completed your practice."
              : "உங்கள் பயிற்சியை வெற்றிகரமாக முடித்துவிட்டீர்கள்."}
          </h6>
          <p className="result-show-content">
            {language == "en"
              ? "Please take your assessment to get your reward points."
              : "உங்கள் வெகுமதி புள்ளிகளைப் பெற உங்கள் மதிப்பீட்டை எடுத்துக் கொள்ளவும்."}
          </p>

          <button
            className="take-test-btn"
            onClick={() =>
              assesmentDatas(
                "assesment",
                assesmentData[0].assessmentQuestions,
                assesmentData[0].assessmentTitle,
                user
              )
            }
          >
            {language == "en" ? "Take Test" : "சோதனை"}
          </button>
        </div>
        <div className="result-show-question-container">
          <div className="inner-question-container">
            {data.map((datas, index) => {
              return (
                <div key={index} style={{ padding: "1%" }}>
                  <p>
                    {datas.number}.{datas.question}
                  </p>
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
                        //checked={true}
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

                  <h6 className="mt-4">Explanation</h6>
                  <h6> {datas.Explanation}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PractisepageResult;
