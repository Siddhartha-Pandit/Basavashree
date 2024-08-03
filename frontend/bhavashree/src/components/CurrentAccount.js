import React from "react";
import Image from "./Image";

import RegisterForm from "./Register";
const CurrentAccount = () => {
  return (
    <div className="remittance-container">
      <Image />
      <div className="text">
        <h1>Current Account</h1>
        <RegisterForm />
        <h3>
          <b>ELIGIBILITY</b>
        </h3>
        <p>
          <b>
            This Current Account scheme is available at selective branches only
          </b>
        </p>
        <br />

        <h3></h3>
      </div>
      <div className="text-container">
        <h3>The Salient Features are :</h3>
      </div>
      <div class="text2">
        <p>
          <br />*
        </p>
      </div>
    </div>
  );
};

export default CurrentAccount;
