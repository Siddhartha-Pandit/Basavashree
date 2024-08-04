import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const LoanForm = ({ title }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [amount, setAmount] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [loantype, setLoanType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = Cookies.get("user");
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setName(parsedUser.name);
        setEmail(parsedUser.email);
        setAadhar(parsedUser.aadhar);
        setPan(parsedUser.pan);
        console.log(pan);
        setUserLoading(false);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    } else {
      console.error("No user data found in cookies.");
    }
  }, [navigate, title]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "address":
        setAddress(value);
        break;
      case "amount":
        setAmount(value);
        break;
      case "tenure":
        setTenure(value);
        break;
      case "loanType":
        setLoanType(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const accessToken = Cookies.get("access_token");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}loan/`,
        {
          name,
          email,
          address,
          pan,
          aadhar,
          amount,
          tenure,
          loantype,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Loan application submitted:", response.data);
        navigate("/success");
      }
    } catch (err) {
      console.error("Loan application failed:", err);
      // Optionally, handle error and show message
    } finally {
      setLoading(false);
    }
  };

  if (userLoading) {
    return (
      <div>
        You are not logged in please
        <Link to="/login"> login to apply loan</Link>
      </div>
    );
  }

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
              value={name}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              required
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadhar">Aadhaar Number:</label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              placeholder="Aadhaar number"
              value={aadhar}
              required
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="pan">PAN Card Number:</label>
            <input
              type="text"
              id="pan"
              name="pan"
              placeholder="PAN card number"
              value={pan}
              required
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Loan Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Loan amount"
              value={amount}
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
              value={tenure}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanType">Loan Type:</label>
            <select
              name="loanType"
              id="loanType"
              value={loantype}
              onChange={handleChange}
            >
              <option value="PERSONAL LOAN">Personal Loan</option>
              <option value="VECHICLE LOAN">Vechicle Loan</option>
              <option value="MORTAGE LOAN">Mortage Loan</option>
              <option value="GOLD LOAN">Gold Loan</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn"
            disabled={loading && !isLoggedIn}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
