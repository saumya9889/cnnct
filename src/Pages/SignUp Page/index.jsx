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
    <>
    <div className="container">
    <div className="signup-wrapper">
    <div className="signup-page">
      <div className="logo">
      <img className='vector' src={LogoVector} alt="logo" />
      <img className='logoimg' src={Logo} alt="logo" />
      </div>
      {/* Left Section - Form */}
      <div className="form-section">
        <h1>Create an account</h1>
        <a href="#" className="signin-link">Sign in instead</a>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
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
            By creating an account, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
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
      
      {/* Right Section - Image */}
      <div className="image-section">
        <img className='right-img' src={SignImg} alt="Person working on laptop" />
      </div>
    </div>
     </div>
   
    </>
  );
};

export default SignUp;
