import SignIn from "./component/SignIn";
import Signup from "./component/Signup";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./component/ForgotPassword";
import VerifyOtp from "./component/VerifyOtp";
import ResetPass from "./component/ResetPass";
import Homepage from "./component/Homepage";
import Mens from "./component/Mens";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/navbar" element={<Navbar/>}></Route>
          <Route path="/login" element={<SignIn/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          <Route path="/verifyOtp" element={<VerifyOtp/>}></Route>
          <Route path="/resetPassword" element={<ResetPass/>}></Route>
          <Route path="/mens" element={<Mens/>}></Route>


        </Routes>
            <ToastContainer theme="dark" position="top-center" />
      </BrowserRouter>
    </>
  );
};

export default App;
