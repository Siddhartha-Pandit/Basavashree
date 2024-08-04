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
            Office: A/P. Zalaki, Chadchan road, tal. India,
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
            <Link to="/about">About Us</Link>
            <Link to="/remittance">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/personal-loan">Personal Loan</Link>
            <Link to="/vechicle-loan">Vehicles Loan</Link>
            <Link to="/mortage-loan">Mortage Loan</Link>
            <Link to="/gold-loan">Gold Loan</Link>
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
