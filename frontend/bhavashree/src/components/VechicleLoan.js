import React from "react";
import Image from "./Image";
import LoanForm from "./LoanForm";
const VechicleLoan = () => {
  return (
    <div className="remittance-container">
      <Image />
      <div className="text">
        <h1>About Vechicles Loan</h1>
        <LoanForm title="Apply For Vechicle Loan" />
        <h3 style={{ color: "#2a364b" }}>
          <b>ELIGIBILITY</b>
        </h3>
        <p>
          <b>
            This Vechicles loan scheme is available at selective branches only
          </b>
        </p>
        <br />

        <h3></h3>
      </div>
      <div className="text-container">
        <p>
          <h2>The Salient Features are :</h2>
          <i class="fa-solid fa-circle-check"></i> Loan amount restricted to 80%
          of the appraised value.
          <br />
          <br />
          <i class="fa-solid fa-circle-check"></i> Security: Pledge of gold
          ornaments only no loan is Interest 17%.
          <br />
          <br />
          <i class="fa-solid fa-circle-check"></i> Duration of the loan 12
          months.
          <br />
          <br />
          <i class="fa-solid fa-circle-check"></i> Appraiser commission to borne
          by the borrower.
          <br />
          <br />
          <i class="fa-solid fa-circle-check"></i> No loan granted on third
          party gold ornaments.
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default VechicleLoan;
