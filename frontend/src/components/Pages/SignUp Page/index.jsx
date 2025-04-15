import React, { useState } from "react";
import SignImg from "../../../assets/images/signup.png";
import { useNavigate } from "react-router-dom";
import LogoSection from "../../common/Logo";



const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.agreed) {
      setError("Please agree to the terms");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        // Store user data in localStorage
        localStorage.setItem("userData", JSON.stringify(data.user));
        alert("Account created successfully!");
        console.log("Created User:", data);
        navigate("/preferences");
      } else {
        setError(data.message || "Something went wrong");
        console.log("Server Error:", data);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to connect to server. Please make sure the server is running.");
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-page">
            <div className="logo">
              <LogoSection/>
            </div>
            <div className="form-section">
              <div className="title-wrap">
                <h1>Create an account</h1>
                <a href="#" className="signin-link">
                  Sign in instead
                </a>
              </div>
              {error && <div className="error-message">{error}</div>}
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <label className="checkbox">
                  <input
                    className="checkbox-input"
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                  />
                  <span className="checkbox-text">
                    By creating an account, I agree to the{" "}
                    <a href="#">Terms of Use</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </span>
                </label>
                <button
                  type="submit"
                  className="signup-btn"
                  disabled={!formData.agreed}
                >
                  Create an account
                </button>
              </form>
              <small>
                By creating an account, I agree to our
                <a href="#">Terms of use</a> and <a href="#">Privacy Policy </a>{" "}
                apply.
              </small>
            </div>
          </div>
          <div className="image-section">
            <img
              className="right-img"
              src={SignImg}
              alt="Person working on laptop"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
