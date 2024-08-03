import React from "react";
// import './Subsidiary.css';
import Image from "./Image";
const Subsidiary = () => {
  return (
    <div className="remittance-container">
      <Image />
      <h1>SUBSIDIARY</h1>
      <div className="text-container">
        <p className="text">
          <i className="fa-solid fa-circle-check"></i> Safe deposit receipts
          facility is available.
          <br />
          <i className="fa-solid fa-circle-check"></i> Safe deposit lockers
          facility available at very select branches only.
          <br />
          <i className="fa-solid fa-circle-check"></i> 24/7 ho branch, bellary
          and hirebevanur branches. This facility available at reasonable rent,
          and armed guards are put in the branch.
        </p>
      </div>
    </div>
  );
};

export default Subsidiary;
