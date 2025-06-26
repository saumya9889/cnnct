
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SignImg from '../../../assets/images/signup.png';
import Logo from '../../../assets/images/logo.png';
import LogoVector from '../../../assets/images/logoVector.png';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // 🧠 Store token
        navigate("/event"); // 👈 protected route
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-page">
          <div className="logo">
            <img className='vector' src={LogoVector} alt="logo" />
            <img className='logoimg' src={Logo} alt="logo" />
          </div>
          <div className="form-section">
            <div className='title-wrap'>
              <h1>Sign in</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="password-wrapper">
                <input
                  className='password-input'
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button type="submit" className="login-btn">Log in</button>
              <p>Don't have an account? <a href="/signup" className='signup-link'>Sign up</a></p>
            </form>
            <small>
            This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
           </small>
          </div>
        </div>
        <div className="image-section">
          <img className='right-img' src={SignImg} alt="login-visual" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
