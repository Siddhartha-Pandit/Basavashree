import React from "react";

const SuccessPage = () => {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="icon-container">
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request;
          <br />
          we'll be in touch shortly!
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
