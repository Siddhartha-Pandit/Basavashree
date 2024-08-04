import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const RegisterForm = () => {
  const [formData, setFormData] = useState(new FormData());
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { data, error, loading, doPost } = useFetch(
    `${process.env.REACT_APP_API_URL}register/`,
    {
      method: "POST",
      headers: {
        // No need to set Content-Type header for multipart/form-data, it will be set automatically
      },
    }
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    if (type === "file") {
      formData.append(name, files[0]);
    } else {
      formData.set(name, value);
      if (name === "password") {
        setPassword(value);
      } else if (name === "confirm_password") {
        setConfirmPassword(value);
      }
    }
    setFormData(formData);
  };

  const validateForm = () => {
    const errors = {};
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const aadharRegex = /\d{12}$/;

    // const aadharRegex = /^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}/;
    // "^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$()!%*?&\s])[A-Za-z\d@$()!%*?&\s]{8,}$/;

    if (!panRegex.test(formData.get("pan"))) {
      errors.pan = "Invalid PAN number format.";
    }
    if (!aadharRegex.test(formData.get("aadhar"))) {
      errors.aadhar = "Invalid Aadhar number format.";
    }
    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special characters like @$()!%*?&.";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await doPost(formData);
      if (!loading) {
        navigate("/success");
      }
    }
  };

  return (
    <div className="form-root">
      <div className="form-container">
        <form id="myForm" onSubmit={handleSubmit}>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="confirm_password">Confirm Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm your password"
                    required
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                  )}
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
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="aadhar">Aadhar Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="aadhar"
                    id="aadhar"
                    placeholder="Enter your Aadhar number"
                    required
                    onChange={handleChange}
                  />
                  {errors.aadhar && (
                    <p style={{ color: "red" }}>{errors.aadhar}</p>
                  )}
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="pan">PAN Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="pan"
                    id="pan"
                    placeholder="Enter your PAN number"
                    required
                    onChange={handleChange}
                  />
                  {errors.pan && <p style={{ color: "red" }}>{errors.pan}</p>}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="photo">Photo:</label>
                </td>
                <td>
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/*"
                    required
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="aadharimg">Aadhar Card Image:</label>
                </td>
                <td>
                  <input
                    type="file"
                    name="aadharimg"
                    id="aadharimg"
                    accept=".pdf,.jpg,.png"
                    required
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="panimg">PAN Card Image:</label>
                </td>
                <td>
                  <input
                    type="file"
                    name="panimg"
                    id="panimg"
                    accept=".pdf,.jpg,.png"
                    required
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  <button type="submit" className="btn submit-btn">
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  {error && <p style={{ color: "red" }}>{error.message}</p>}
                  {data && (
                    <p style={{ color: "green" }}>Registration successful!</p>
                  )}
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
