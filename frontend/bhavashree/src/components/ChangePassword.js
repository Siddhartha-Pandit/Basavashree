import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$()!%*?&\s])[A-Za-z\d@$()!%*?&\s]{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      setLoading(false);
      return;
    }

    if (!passwordRegex.test(newPassword)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      setLoading(false);
      return;
    }

    const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      setError("User is not logged in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}reset_password/`,
        {
          current_password: currentPassword,
          new_password: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccess("Password changed successfully.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        navigate("/");
      }
    } catch (error) {
      setError("Failed to change password. Please try again.");
      console.error("Password change error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-root">
      <div className="form-container">
        <div className="form-title">Change Password</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="confirmPassword">Confirm New Password:</label>
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
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
