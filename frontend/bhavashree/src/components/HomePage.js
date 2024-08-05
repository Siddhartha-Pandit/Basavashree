import React from "react";
import "../App.css";
import slide1 from "../images/Dir2.jpg";
import slide2 from "../images/bg.jpg";
import slide3 from "../images/Dir2.jpg";
import personalLoan from "../images/personal-loan1.jpg";
import goldLoan from "../images/gold-loan.jpg";
import mortgageLoan from "../images/Mortgage-loan.jpg";
import groupIcon from "../images/group.png";
import scheduleIcon from "../images/schedule.png";
import chatIcon from "../images/chat.png";
import emp1 from "../images/emp1.jpg";
import emp2 from "../images/emp2.jpg";
import { Link } from "react-router-dom";
// import "../HomePage.css";
const HomePage = () => {
  return (
    <main>
      <section id="home">
        <h1>
          Welcome to Basavashree Souharda Co-operative Society Ltd, Zalaki!
        </h1>
        <div className="slider-frame">
          <div className="slide-images">
            <div className="img-container">
              <img src={slide1} alt="Slide 1" />
            </div>
            <div className="img-container">
              <img src={slide2} alt="Slide 2" />
            </div>
            <div className="img-container">
              <img src={slide3} alt="Slide 3" />
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <h1>Let us help you find a loan</h1>
        <p>
          We will match you with a loan program that meets your financial needs.
        </p>
        <div className="container">
          <div className="card">
            <a href="personal_loan.html">
              <img src={personalLoan} alt="Personal Loan" />
            </a>
            <h2>Personal-loan</h2>
            <p>
              Salary earners quantum of the loan; need base; purpose for meeting
              domestic and medical needs
            </p>

            <Link to="/personal-loan">
              <button>Read More...</button>
            </Link>
          </div>

          <div className="card">
            <a href="gold_loan.html">
              <img src={goldLoan} alt="Gold Loan" />
            </a>
            <h2>Gold-loan</h2>
            <p>
              Pledge of gold ornaments only; no loan is granted on gold bars and
              coins.
            </p>

            <Link to="/gold-loan">
              <button>Read More...</button>
            </Link>
          </div>

          <div className="card">
            <a href="mortage_loan.html">
              <img src={mortgageLoan} alt="Mortgage Loan" />
            </a>
            <h2>Mortgage-loan</h2>
            <p>
              Mortgage of landed property; agricultural land in very exceptional
              cases at the discretion of the board; margin, 40% on the valuation
              of the property.
            </p>
            <Link to="/mortage-loan">
              <button>Read More...</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="help">
        <h2>Why people choose us</h2>
        <p>
          We understand how to effectively guide you through the home loan or
          refinance process and avoid potential problems along the way.
        </p>
        <div className="container2">
          <div className="card2">
            <img src={groupIcon} alt="Dedicated Specialists" />
            <h3>Dedicated Specialists</h3>
            <p>We have all the specialists required to serve our customers.</p>
          </div>

          <div className="card2">
            <img src={scheduleIcon} alt="365 Days A Year" />
            <h3>365 Days A Year</h3>
            <p>Yes, you heard it. We are always open to serve our customers.</p>
          </div>

          <div className="card2">
            <img src={chatIcon} alt="Success Stories Rating" />
            <h3>Success Stories Rating</h3>
            <p>
              We have built a very strong customer base by providing excellent
              service.
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>Our Client Testimonial</h2>
        <p>
          See what our customers have to say about Borrow products, people, and
          services.
        </p>
        {/* "container2"  "card2" */}
        <div className="container2">
          <div className="card2">
            <img src={emp1} className="emp" alt="Testimonial 1" />
            <p>
              "I loved the customer service you guys provided me. That was very
              nice and patient with questions I had. I would really like
              definitely come back here."
            </p>
          </div>
          <div className="card2">
            <img src={emp2} className="emp" alt="Testimonial 2" />
            <p>
              "I am very much happy to got your and your team's honest
              commitment for processing my loan application. I wish you all the
              best. Regards."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
