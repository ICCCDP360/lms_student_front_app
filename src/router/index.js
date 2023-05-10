import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./../pages/auth/signin/Signin";
import Mainpage from "./../pages/auth/signin/Mainpage";
import Verificationpage from "../pages/auth/signin/Verificationpage";
import Loginotp from "../pages/auth/signin/Loginotp";
import Accountdetails from "../pages/auth/signin/Accountdetails";
import Verifyaccount from "../pages/auth/signin/Verifyaccount";
import MainContentPage from "../pages/views";
import Dashboard from "./../pages/views/dashboard/Dashboard";
import Forum from "../pages/views/Q&A/Forum";
import AccountVerification from "../pages/auth/signin/AccountVerification";
import MainCourse from "../pages/views/content/MainCourse";
import MyTaskContinuePage from "../pages/views/content/MyTaskContinuePage";
import Forgotpassword from "../pages/auth/signin/Forgotpassword";
import Resetpassword from "../pages/auth/signin/Resetpassword";
import Login from "../pages/auth/signin/Login";
import ExamContent from "./../pages/views/videoPlayer/ExamContent";
import PdfPage from "../pages/views/videoPlayer/PdfPage";
import PractisePage from "../pages/views/components/Practise/PractisePage";
import Assessment from "../pages/views/components/Assessment/Assessment";
import ProfileMain from "../pages/views/profile/ProfileMain";
import ChangePassword from "./../pages/views/changePassword/ChangePassword";
import Notification from "./../pages/views/notification/Notification";
import ProtectedRoutes from "./protected-route";
import SchoolIdVerify from "../pages/auth/signin/SchoolIdVerify";
import VideoPlayer2 from '../pages/video_player'
import ContentPlayPage from "../pages/views/content/ContentPlayPage";
import PractiseText from './../pages/views/content/ExamPage/PractiseText';
import AssessmentText from './../pages/views/content/ExamPage/AssessmentText';
function IndexRouters() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SchoolIdVerify />} />
        <Route path='/video' element={<VideoPlayer2 />} />

        <Route path="/number_verify" element={<Mainpage />} />
        <Route path="/verification_page" element={<Verificationpage />} />
        <Route path="/login_otp" element={<Loginotp />} />
        <Route path="/account_details" element={<Accountdetails />} />
        <Route path="/verify_account" element={<Verifyaccount />} />
        <Route path="/sign_in" element={<Signin />} />
        <Route path="/account_verify" element={<AccountVerification />} />
        {/* */}
        <Route path="/forgot_password" element={<Forgotpassword />} />
        <Route path="/reset_password" element={<Resetpassword />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainContentPage />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/content" element={<MainCourse />}>
              <Route path="/content/task" element={<MyTaskContinuePage />} />
            </Route>

            <Route path='/contentshow' element={<ContentPlayPage/>}/>
            <Route path='/practise_text' element={<PractiseText/>}/>
          <Route path='/assessment_text' element={<AssessmentText/>}/>

            <Route path="/exam" element={<ExamContent />}>
              <Route path="/exam/pdf" element={<PdfPage />} />
            </Route>
            <Route path="/practise_page" element={<PractisePage />} />
            <Route path="/assessent_page" element={<Assessment />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/profile" element={<ProfileMain />} />
            <Route path="/change_password" element={<ChangePassword />} />
            <Route path="/notification" element={<Notification />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default IndexRouters;
