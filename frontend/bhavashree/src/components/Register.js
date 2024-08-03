import React from "react";
import "./HomePage";

const RegisterForm = () => {
  return (
    <div className="form-root">
      <div className="form-container">
        <form id="myForm" enctype="multipart/form-data">
          <table>
            <thead>
              <tr>
                <th colSpan="2" className="form-title">
                  <center>Register</center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="form-group">
                <td>
                  <label htmlFor="name">Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="email">Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="password">Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="phone">Phone Number:</label>
                </td>
                <td>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="pan_file">PAN Card:</label>
                </td>
                <td>
                  <input
                    type="file"
                    name="pan_file"
                    id="pan_file"
                    accept=".pdf,.jpg,.png"
                    required
                  />
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="aadhar_file">Aadhar Card:</label>
                </td>
                <td>
                  <input
                    type="file"
                    name="aadhar_file"
                    id="aadhar_file"
                    accept=".pdf,.jpg,.png"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  <button type="submit" className="btn submit-btn">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
