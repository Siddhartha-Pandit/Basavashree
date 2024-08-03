import React, { useState } from "react";
import "../HomePage.css"; // Ensure this path is correct for your setup

const LoanForm = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    pan: "",
    aadhar: "",
    amount: "",
    tenure: "",
    loanType: "PERSONAL LOAN",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-root">
      <div className="form-container">
        <h2 className="form-title">{title}</h2>
        <form id="loanForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pan">PAN Card Number:</label>
            <input
              type="text"
              id="pan"
              name="pan"
              placeholder="PAN card number"
              value={formData.pan}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadhar">Aadhaar Number:</label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              placeholder="Aadhaar number"
              value={formData.aadhar}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Loan Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Loan amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tenure">Loan Tenure (Years):</label>
            <input
              type="number"
              id="tenure"
              name="tenure"
              placeholder="Loan tenure in years"
              value={formData.tenure}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanType">Loan Type:</label>
            <select
              name="loanType"
              id="loanType"
              value={formData.loanType}
              onChange={handleChange}
            >
              <option value="...">...</option>
              <option value="PERSONAL LOAN">Personal Loan</option>
              <option value="HOME LOAN">Home Loan</option>
              <option value="EDUCATION LOAN">Education Loan</option>
              <option value="CAR LOAN">Car Loan</option>
              <option value="TWO WHEELER LOAN">Two Wheeler Loan</option>
              <option value="GOLD LOAN">Gold Loan</option>
              <option value="PROPERTY LOAN">Property Loan</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
