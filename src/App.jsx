/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import RecoveryPage from "./components/RecoveryPage";
import MailPage from "./components/Mail";
import SignUp_Lecturer from "./components/signup_lecturer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/lecturer" element={<SignUp_Lecturer/>} />
        <Route path="forget-password" element={<RecoveryPage />} />
        <Route path="mailsent" element={<MailPage />} />
      </Routes>
    </>
  );
};

export default App;
