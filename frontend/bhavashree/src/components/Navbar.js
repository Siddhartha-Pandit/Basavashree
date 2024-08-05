import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../AuthContext";
import axios from "axios";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const profileMenuRef = useRef(null);
  const servicesSubmenuRef = useRef(null);
  const loanSubmenuRef = useRef(null);
  const accountSubmenuRef = useRef(null);
  const sideNavRef = useRef(null); // Reference for the side navigation menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = async () => {
    const url = `${process.env.REACT_APP_API_URL}logout/`;
    const accessToken = Cookies.get("access_token");

    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        Cookies.remove("user");
        logout();
        console.log("User logged out successfully");
      } else {
        console.error("Error logging out:", response.statusText);
      }
    } catch (err) {
      console.error("Logout request failed:", err);
    }
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
      if (
        servicesSubmenuRef.current &&
        !servicesSubmenuRef.current.contains(event.target)
      ) {
        setOpenSubmenus((prev) => ({
          ...prev,
          services: false,
        }));
      }
      if (
        loanSubmenuRef.current &&
        !loanSubmenuRef.current.contains(event.target)
      ) {
        setOpenSubmenus((prev) => ({
          ...prev,
          loan: false,
        }));
      }
      if (
        accountSubmenuRef.current &&
        !accountSubmenuRef.current.contains(event.target)
      ) {
        setOpenSubmenus((prev) => ({
          ...prev,
          account: false,
        }));
      }
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close side navigation menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    profileMenuRef,
    servicesSubmenuRef,
    loanSubmenuRef,
    accountSubmenuRef,
    sideNavRef,
  ]);

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
          <nav
            ref={sideNavRef} // Attach ref to the side navigation menu
            className={`nav-container ${isMenuOpen ? "open" : ""}`}
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="#" onClick={() => handleSubmenuToggle("services")}>
                  Services
                </a>
                <ul
                  ref={servicesSubmenuRef}
                  style={{
                    display: openSubmenus.services ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/remittance">Remittance</Link>
                  </li>
                  <li>
                    <Link to="/subsidiary">Subsidiary</Link>
                  </li>
                  <li>
                    <Link to="/fixed-deposit">Fixed Deposit</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" onClick={() => handleSubmenuToggle("loan")}>
                  Loan
                </a>
                <ul
                  ref={loanSubmenuRef}
                  style={{
                    display: openSubmenus.loan ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/personal-loan">Personal Loan</Link>
                  </li>
                  <li>
                    <Link to="/vechicle-loan">Vehicles Loan</Link>
                  </li>
                  <li>
                    <Link to="/mortage-loan">Mortage Loan</Link>
                  </li>
                  <li>
                    <Link to="/gold-loan">Gold Loan</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" onClick={() => handleSubmenuToggle("account")}>
                  Account
                </a>
                <ul
                  ref={accountSubmenuRef}
                  style={{
                    display: openSubmenus.account ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/saving-account">Saving Account</Link>
                  </li>
                  <li>
                    <Link to="/current-account">Current Account</Link>
                  </li>
                  <li>
                    <Link to="/regular-account">Regular Account</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </nav>
          <div className="auth-container">
            {isLoggedIn ? (
              <div className="profile-container">
                <img
                  src={
                    user ? `${process.env.REACT_APP_API_URL}` + user.photo : ""
                  }
                  alt="Profile"
                  className="profile-pic"
                  onClick={toggleProfileMenu}
                />
                {isProfileMenuOpen && (
                  <div className="profile-menu" ref={profileMenuRef}>
                    <p>Welcome, {user ? user.name : "User"}!</p>
                    <button onClick={handleLogout}>Logout</button>
                    <Link to="/account-settings">Account Setting</Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="btnlogin" id="login">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btnlogin" id="register">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
