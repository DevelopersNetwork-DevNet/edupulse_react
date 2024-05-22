/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import RecoveryPage from "./components/RecoveryPage";
import MailPage from "./components/Mail";
import SignUp_Lecturer from "./components/signup_lecturer";
import Login_Lecturer from "./components/login_lecturer";
import Learn from "./components/Learn/Learn";
import ClassView from "./components/ClassView/ClassView";
import Classes from "./components/Learn/Classes";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signup_lecturer" element={<SignUp_Lecturer/>} />
        <Route path="/login_lecturer" element={<Login_Lecturer />} />
        <Route path="forget-password" element={<RecoveryPage />} />
        <Route path="mailsent" element={<MailPage />} />
        <Route path="/learn" exact element={<Learn />} />
        <Route path="/classview" exact element={<ClassView />} />
        {/* <Route path="/learn/myclasses" exact element={<Classes />} /> */}
      </Routes>
    </>
  );
};

export default App;
