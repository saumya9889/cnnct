import React, { useState } from 'react';
import SignImg from '../../assets/images/signup.png';
import Logo from '../../assets/images/logo.png';
import LogoVector from '../../assets/images/logoVector.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
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
            <h1>Create an account</h1>
            <a href="#" className="signin-link">Sign in instead</a>
            </div>
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
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
                <span className='checkbox-text'>By creating an account, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</span>
              </label>
              <button type="submit" className="signup-btn" disabled={!formData.agreed}>
                Create an account
              </button>
            </form>
            <small>
              This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
            </small>
          </div>
        </div>
        <div className="image-section">
          <img className='right-img' src={SignImg} alt="Person working on laptop" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;