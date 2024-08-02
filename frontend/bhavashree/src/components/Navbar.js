import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import profilePic from "../images/profile.jpg"; // Replace with the actual path to your profile image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for demo purposes
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({}); // Track open submenus
  const profileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
  };

  const handleSubmenuToggle = (submenu) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  return (
    <>
      <header>
        <div className="logo">
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>
          <img src={logo} alt="Logo" className="image" />
          <p>Basavashree Souharda Co-operative Society Ltd</p>
        </div>
        <div className="nav-menu-holder">
          <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#" onClick={() => handleSubmenuToggle("services")}>
                  Services
                </a>
                <ul
                  style={{
                    display: openSubmenus.services ? "block" : "none",
                  }}
                >
                  <li>
                    <a href="#">Remittances</a>
                  </li>
                  <li>
                    <a href="#">Subsidiary</a>
                  </li>
                  <li>
                    <a href="#">Fixed Deposit</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" onClick={() => handleSubmenuToggle("loan")}>
                  Loan
                </a>
                <ul
                  style={{
                    display: openSubmenus.loan ? "block" : "none",
                  }}
                >
                  <li>
                    <a href="#">Personal Loan</a>
                  </li>
                  <li>
                    <a href="#">Vehicles Loan</a>
                  </li>
                  <li>
                    <a href="#">Mortgage Loan</a>
                  </li>
                  <li>
                    <a href="#">Gold Loan</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" onClick={() => handleSubmenuToggle("account")}>
                  Account
                </a>
                <ul
                  style={{
                    display: openSubmenus.account ? "block" : "none",
                  }}
                >
                  <li>
                    <a href="#">Saving Account</a>
                  </li>
                  <li>
                    <a href="#">Current Account</a>
                  </li>
                  <li>
                    <a href="#">Regular Account</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </nav>
          <div className="auth-container">
            {isLoggedIn ? (
              <div className="profile-container">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="profile-pic"
                  onClick={toggleProfileMenu}
                />
                {isProfileMenuOpen && (
                  <div className="profile-menu" ref={profileMenuRef}>
                    <p>Welcome, User!</p>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="btnlogin" id="login">
                  Login
                </button>
                <button className="btnlogin" id="register">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
