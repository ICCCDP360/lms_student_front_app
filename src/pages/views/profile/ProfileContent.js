import React from "react";
import Camp from "../../../assets/images/rank.svg";
import "./styles/Profilepage.scss";
import { useLocation } from "react-router-dom";
import logo1 from "../../../assets/avatar.svg";
// import { useEffect } from "react";
function ProfileContent() {
  const language = localStorage.getItem("lang") || "en";

  const { state } = useLocation();

  console.log(state);

  const student = state.data.studentDetails;

  const school = state.data.schoolDetails;

  const parent = state.data.parentDetails;

  const forms = "";

  // useEffect(() => {}, [state]);

  return (
    <div className="main-container-profilecontent">
      <div className="sub-container-content-1">
        <div>
          {forms ? (
            <>
              <img
                className="user-details-img-dp"
                // src={userDetails.dp}
                alt="Profile"
              />
            </>
          ) : (
            <>
              <img className="user-details-img-dp" src={logo1} />
            </>
          )}
        </div>
        <div>
          <p className="user-details-stu-name">{student.name} </p>
        </div>
        <div className="d-flex justify-content-center">
          <img src={Camp} alt="camp" />
          <p className="profile-content-point">{/* {userDetails.points} */}</p>
        </div>
      </div>
      <div className="sub-container-content-2">
        <p className="personal-para-info">
          {language == "en" ? "Personal Info" : "தனிப்பட்ட தகவல்"}
        </p>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "Name" : "பெயர்"}
            </p>
            <input
              value={student?.name}
              className="stu-name-input-field"
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "Mobile Number" : "கைபேசி எண்"}
            </p>
            <input
              className="stu-name-input-field "
              value={student.phone}
              type="number"
            />
          </div>
        </div>
        <div className="d-flex justify-content-beetween w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "Email" : "மின்னஞ்சல்"}
            </p>
            <input
              className="stu-name-input-field "
              value={student.email}
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "Date of Birth" : "பிறந்த தேதி"}
            </p>
            <input
              className="stu-name-input-field"
              value={student.dob}
              type="text"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "Gender" : "பாலினம்"}
            </p>
            <input
              className="stu-name-input-field"
              value={student.gender}
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "City" : "நகரம்"}
            </p>
            <input
              className="stu-name-input-field"
              value={student.city}
              type="text"
            />
          </div>
        </div>
        <p className="personal-para-info">
          {language == "en" ? "School Info" : "பள்ளி தகவல்"}
        </p>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "Role Number" : "பட்டியல் எண்"}
            </p>
            <input
              className="stu-name-input-field"
              value={student.roll_no}
              type="text"
            />
          </div>
          <div className="d-flex justify-content-between w-100">
            <div className="w-100">
              <p className="eng-para-1">
                {language == "en" ? "Standard" : "தரநிலை"}
              </p>
              <input
                className="stu-name-input-field"
                value={student.std}
                type="text"
              />
            </div>
            <div className="w-100">
              <p className="eng-para-1" style={{ marginBottom: "0px" }}>
                {language == "en" ? "Section" : "பிரிவு"}
              </p>
              <input className="stu-name-input-field" value="B" type="text" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "School Name" : "பள்ளி பெயர்"}
            </p>
            <input
              className="stu-name-input-field"
              // value={school.sch_name}
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "School Id" : "பள்ளி Id"}
            </p>
            <input
              className="stu-name-input-field"
              value={school.sch_id}
              type="text"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "School Address" : "பள்ளி முகவரி"}
            </p>
            <input
              className="stu-name-input-field"
              value={school.address}
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="eng-para-1">
              {language == "en" ? "City" : "நகரம்"}
            </p>
            <input
              className="stu-name-input-field"
              value={school.city}
              type="text"
            />
          </div>
        </div>
        <p className="personal-para-info">
          {language == "en"
            ? "Parent/Guardian Info"
            : "பெற்றோர்/பாதுகாவலர் தகவல்"}
        </p>
        <div className="profile-bottom-container">
          <div className="profile-parent-1 d-flex justify-content-between w-100">
            <div className="w-100">
              <p className="eng-para-1">
                {language == "en"
                  ? "Parent/Guardian Name"
                  : "பெற்றோர்/பாதுகாவலர் பெயர்"}
              </p>
              <input
                value={parent.name}
                // value="hi"
                className="stu-name-input-field"
                type="text"
              />
            </div>
            <div className="w-100">
              <p className="eng-para-1">
                {language == "en" ? "Relationship" : "உறவு"}
              </p>
              <input
                value={parent.relation}
                className="stu-name-input-field"
                type="text"
              />
            </div>
          </div>
          <div className="profile-parent-2 d-flex justify-content-between w-100">
            <div className="w-100">
              <p className="eng-para-1">
                {language == "en"
                  ? "Parent/Guardian Email"
                  : "பெற்றோர்/பாதுகாவலர் மின்னஞ்சல்"}
              </p>
              <input
                value={parent.email}
                className="stu-name-input-field-1"
                type="text"
              />
            </div>
            <div className="w-100">
              <p className="eng-para-1">
                {language == "en"
                  ? "Parent/Guardian Contact Number"
                  : "பெற்றோர்/பாதுகாவலர் தொடர்பு எண்"}
              </p>
              <input
                value={parent.phone}
                className="stu-name-input-field"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
