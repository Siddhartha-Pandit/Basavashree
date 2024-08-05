import React from "react";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <h2 className="account-settings-title">Account Settings</h2>
      <p className="account-settings-description">
        Manage your account settings and preferences here. Use the options below
        to update your account information, verify your phone number, or reset
        your password.
      </p>
      <div className="settings-cards">
        <div className="settings-card">
          <i class="fas fa-phone settings-icon"></i>
          <h3>Verify Phone Number</h3>
          <p>
            Ensure your phone number is verified for added security and to
            receive important notifications.
          </p>
          <Link to="/verify-phone" className="settings-link">
            Verify Now
          </Link>
        </div>
        <div className="settings-card">
          <i class="fas fa-key settings-icon"></i>
          <h3>Forgot Password</h3>
          <p>
            Reset your password to regain access to your account in case you
            have forgotten it.
          </p>
          <Link to="/forgot-password" className="settings-link">
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
