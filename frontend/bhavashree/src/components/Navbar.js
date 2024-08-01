import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import profilePic from "../images/profile.jpg"; // Replace with the actual path to your profile image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for demo purposes
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
  };

  // Handle clicks outside the profile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="top">
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className="logo">
          <img src={logo} alt="logo" className="image" />
          <h3>Basavashree Souharda Co-operative Society Ltd</h3>
        </div>
        <div className={`nav-container ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
                <ul>
                  <li>
                    <a href="remittances.html">Remittances</a>
                  </li>
                  <li>
                    <a href="subsidiary.html">Subsidiary</a>
                  </li>
                  <li>
                    <a href="fixed_deposit.html">Fixed Deposit</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="#">Loan</a>
                <ul>
                  <li>
                    <a href="personal_loan.html">Personal Loan</a>
                  </li>
                  <li>
                    <a href="vehicle_loan.html">Vehicle Loan</a>
                  </li>
                  <li>
                    <a href="mortgage_loan.html">Mortgage Loan</a>
                  </li>
                  <li>
                    <a href="gold_loan.html">Gold Loan</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Account</a>
                <ul>
                  <li>
                    <a href="saving_account.html">Saving Account</a>
                  </li>
                  <li>
                    <a href="current_account.html">Current Account</a>
                  </li>
                  <li>
                    <a href="regular_account.html">Regular Account</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              {!isLoggedIn ? (
                <>
                  <li>
                    <a href="login.html">
                      <button className="btnlogin" id="login">
                        Login
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="register.html">
                      <button className="btnlogin" id="register">
                        Register
                      </button>
                    </a>
                  </li>
                </>
              ) : (
                <div className="profile-container">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="profile-pic"
                    onClick={toggleProfileMenu}
                  />
                  {isProfileMenuOpen && (
                    <div className="profile-menu" ref={profileMenuRef}>
                      <p>Somnath Patil</p>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
