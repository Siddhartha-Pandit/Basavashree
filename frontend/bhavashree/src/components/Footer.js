import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-description">
            We are serving the people of Karnataka through the Souharda Sahakari
            movement. We have been working in the field of finance, social,
            cultural sports, religious and health, women and youth empowerment,
            and so on.
          </div>
          <div className="footer-logo">
            <i class="fas fa-map-marker-alt map-icon"></i>
            Basavashree Souharda Co-operative Society Ltd.
            <br />
            Office: A/P. Zalaki, Chadchan road, tal. Indi,
            <br />
            Dist. Vijaypura, Karnataka
          </div>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <a href="about.html">About Us</a>
            <Link to="/remittance">Services</Link>
            <a href="contact.html">Contact</a>
            <a href="personal_loan.html">Personal Loan</a>
            <a href="gold_loan.html">Gold Loan</a>
            <a href="vehicle_loan.html">Vehicle Loan</a>
            <a href="mortage_loan.html">Mortgage Loan</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Basavashree Souharda Co-operative Society Ltd.
      </div>
    </footer>
  );
};

export default Footer;
