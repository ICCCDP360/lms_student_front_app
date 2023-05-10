// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import subjectService from "../../../services/subjectService";
// import Chapter from "../../../assets/images/chapter.svg";
// import { useNavigate } from "react-router-dom";

// function SubjectPage({ step, state }) {
//   const [subjectData, setSubjectData] = useState([]);
//   const navigate = useNavigate();

//   const courseContentPage = (data) => {
//     navigate("/course/content", { state: data });
//   };
//   const classSelectionApi1 = (step) => {
//     return new Promise((resolve, reject) => {
//         console.log(state,'manoj');
//       let data = {
//         standard: state[step].standard,
//         subject: state[step].subject,
//         courseId: state[step].course,
//       };
//       subjectService
//         .subjectServiceSelect(data)
//         .then((res) => {
//           setSubjectData(res);
//           console.log(res, "manoj");
//         })
//         .catch((err) => {
//           setSubjectData(err.response.data);
//           // if (err.response.data == "School Not Found") {
//           //     setError("Account not found");
//           //   }
//           reject(false);
//         });
//     });
//   };

//   useEffect(() => {
//     classSelectionApi1(step);
//   }, []);
//   return (
//     <div>
//       {subjectData.map((data) => (
//         <>
//           {data.languageCode == "en" ? (
//             <div className="myTask-full-container mt-4">
//               <div className="mytask-sub-container">
//                 <div>
//                   <h1 className="subject-content">{data.name}</h1>
//                   <div className="subject-btm-container mt-3">
//                     <img src={Chapter} />
//                     <p className="subject-btm-text mb-0">
//                       {data.pdfsCount} Chapter
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => courseContentPage(data)}
//                     className="mytask-btn mt-3"
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <p>{data.message}</p>
//           )}
//         </>
//       ))}
//     </div>
//   );
// }

// export default SubjectPage;
