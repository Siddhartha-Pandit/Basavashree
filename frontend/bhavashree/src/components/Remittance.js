import React from "react";
import img2 from "../images/img2.jpg";
import Image from "./Image";
import "../HomePage.css";
const Remittance = () => {
  return (
    <div className="remittance-container">
      <Image />
      <h1>REMITTANCES</h1>
      <div className="text-container">
        <p>
          <i class="fa-solid fa-circle-check"></i> NEFT/RTGS/Western Money.
          <br />
          <i class="fa-solid fa-circle-check"></i> Arrangement of outward and
          inward transfer of funds through NEFT/RTGS through well reputed
          scheduled banks which assures fast and accurate transfer of funds.
          <br />
          <i class="fa-solid fa-circle-check"></i> Mobile banking facility is
          available to all our account holders on registering their mobile no
          and Aadhar no following facilities are available.
          <br />
          <i class="fa-solid fa-circle-check"></i> Fund transfer account balance
          mini-statements recharge and billing.
          <br />
          <i class="fa-solid fa-circle-check"></i> Funds transfer to their own
          accounts others accounts and other banks accounts.
        </p>
      </div>
    </div>
  );
};

export default Remittance;
