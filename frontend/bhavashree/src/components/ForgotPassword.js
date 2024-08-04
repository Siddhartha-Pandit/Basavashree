import React, { useState, useEffect } from "react";
import useFetch from "./useFetch"; // Update the path as needed
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [timer, setTimer] = useState(60); // 1 minute timer

  const { data: otpData, doPost: sendOtp } = useFetch(
    `${process.env.REACT_APP_API_URL}generateotp/`
  );
  const { data: verifyOtpData, doPost: verifyOtp } = useFetch(
    `${process.env.REACT_APP_API_URL}verifyotp/`
  );
  const { data: resetPasswordData, doPost: resetPassword } = useFetch(
    `${process.env.REACT_APP_API_URL}forgotpassword/`
  );

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, step]);

  const handleSendOtp = async () => {
    await sendOtp({ email });
    setStep(2);
    setTimer(60); // Reset the timer
  };

  const handleVerifyOtp = async () => {
    await verifyOtp({ email, otp });
    if (verifyOtpData && verifyOtpData.isoptverified) {
      setStep(3);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$()!%*?&\s])[A-Za-z\d@$()!%*?&\s]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }
    await resetPassword({ email, otp, password: newPassword });
    if (resetPasswordData && resetPasswordData.ispasswordreset) {
      alert("Password reset successfully");
      navigate("/");
    }
  };

  return (
    <div className="form-root">
      <div className="form-container">
        <div className="form-title">
          {step === 1
            ? "Forgot Password"
            : step === 2
            ? "Enter OTP"
            : "Reset Password"}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="button" className="btn" onClick={handleSendOtp}>
                Send OTP
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="form-group">
                <label htmlFor="otp">OTP:</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <button type="button" className="btn" onClick={handleVerifyOtp}>
                Verify OTP
              </button>
              {timer > 0 ? (
                <p>Resend OTP in {timer} seconds</p>
              ) : (
                <Link to="#" onClick={handleSendOtp}>
                  Resend OTP
                </Link>
              )}
            </>
          )}
          {step === 3 && (
            <>
              <div className="form-group">
                <label htmlFor="newPassword">New Password:</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="button"
                className="btn"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
