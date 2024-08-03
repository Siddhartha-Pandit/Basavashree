import React from "react";
import Image from "./Image";
import LoanForm from "./LoanForm";
const PersonalLoan = () => {
  return (
    <div className="remittance-container">
      <Image />
      <div className="text">
        <h1>About Personal Loan</h1>
        <LoanForm title="Apply For Personal Loan" />
        <h3 style={{ color: "#2a364b" }}>
          <b>ELIGIBILITY</b>
        </h3>
        <p>
          <b>
            This personal loan scheme is available at selective branches only
          </b>
        </p>
        <br />

        <h3></h3>
      </div>
      <div className="text-container">
        <p>
          <h2>The Salient Features are :</h2>
          <br />
          <i className="fa-solid fa-circle-check"></i> Salary earners quantum of
          the loan; need base; purpose for meeting domestic and medical needs.
          <br />
          <br />
          <i className="fa-solid fa-circle-check"></i> Repayable in 24 months by
          easy installments monthly/quarterly/half yearly security: guarantors
          three and pdc int 18%.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default PersonalLoan;
