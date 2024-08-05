import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const VerifyPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isResendAllowed, setIsResendAllowed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = Cookies.get("user");
    const user = JSON.parse(userData);
    if (user) {
      //   setPhoneNumber(user.phone); // Initialize phoneNumber with user's phone number from cookies
    }
  }, []);

  useEffect(() => {
    let interval;
    if (otpRequested && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendAllowed(true);
    }
    return () => clearInterval(interval);
  }, [otpRequested, timer]);

  const getAuthHeaders = () => {
    const token = Cookies.get("access_token");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const requestOtp = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}sendotp/`,
        {
          phone: phoneNumber,
        },
        getAuthHeaders()
      );
      setOtpRequested(true);
      setIsResendAllowed(false);
      setSuccess(response.data.message);
      setTimer(60); // Reset timer to 60 seconds
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}verify-phone/`,
        { otp },
        getAuthHeaders()
      );
      setSuccess(response.data.message);
      navigate("/");
      setOtp(""); // Clear OTP input after successful verification
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-root">
      <div className="form-container">
        <h2 className="form-title">Verify Phone Number</h2>
        {!otpRequested ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              requestOtp();
            }}
          >
            <div className="form-group">
              <label htmlFor="phoneNumber">Enter Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Requesting OTP..." : "Request OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            {timer > 0 && (
              <p className="timer-message">Resend OTP in {timer}s</p>
            )}
            {timer === 0 && isResendAllowed && (
              <button
                type="button"
                className="btn"
                onClick={requestOtp}
                disabled={loading}
              >
                {loading ? "Requesting OTP..." : "Resend OTP"}
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default VerifyPhone;
