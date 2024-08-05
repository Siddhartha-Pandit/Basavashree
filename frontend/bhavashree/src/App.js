import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Remittance from "./components/Remittance";
import Subsidiary from "./components/Subsidiary";
import FixedDeposit from "./components/FixedDeposit";
import ContactUs from "./components/ContactUs";
import PersonalLoan from "./components/PersonalLoan";
import VechicleLoan from "./components/VechicleLoan";
import MortageLoan from "./components/MortageLoan";
import GoldLoan from "./components/GoldLoan";
import AboutUs from "./components/AboutUs";
import SavingAccount from "./components/SavingAccount";
import CurrentAccount from "./components/CurrentAccount";
import RegularAccount from "./components/RegularAccount";
import Gallery from "./components/Gallery";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import NotFoundPage from "./components/NotFoundPage";
import SuccessPage from "./components/SuccessPage";
import VerifyPhone from "./components/VerifyPhone";
import Cookies from "js-cookie";
import AccountSettings from "./components/AccountSettings";

function App() {
  const [isPhoneVerified, setPhoneVerified] = useState(true);
  const [user, setUser] = useState({});

  // Function to update user data and phone verification status
  const updateUserData = () => {
    const accessToken = Cookies.get("access_token");
    const userData = Cookies.get("user");

    if (accessToken && userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setPhoneVerified(parsedUser.is_phone_verified);
    }
  };
  console.log(user);

  useEffect(() => {
    updateUserData();
  }, []);
  const handleVerifyPhoneClick = () => {
    setPhoneVerified(true);
  };
  const handleCloseWarning = () => {
    setPhoneVerified(true);
  };
  // Optionally, you can add an effect that listens to changes in the cookies
  // and updates the state accordingly.

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="web-content">
          {!isPhoneVerified && (
            <div className="verify-phone-warning">
              Please verify your Phone number
              <Link to="/verify-phone" onClick={handleVerifyPhoneClick}>
                {" "}
                here
              </Link>
              <button className="close-warning" onClick={handleCloseWarning}>
                &times;
              </button>
            </div>
          )}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/remittance" element={<Remittance />} />
            <Route path="/subsidiary" element={<Subsidiary />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/fixed-deposit" element={<FixedDeposit />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/vechicle-loan" element={<VechicleLoan />} />
            <Route path="/mortage-loan" element={<MortageLoan />} />
            <Route path="/gold-loan" element={<GoldLoan />} />
            <Route path="/saving-account" element={<SavingAccount />} />
            <Route path="/current-account" element={<CurrentAccount />} />
            <Route path="/regular-account" element={<RegularAccount />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/verify-phone" element={<VerifyPhone />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
