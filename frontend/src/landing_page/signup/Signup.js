import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/signup", formData);
      // console.log(res)
      alert(res.data.message);
      window.location.href = "http://localhost:3001";
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow bg-white rounded w-100"
        style={{ maxWidth: "1000px" }}
      >
        {/* Left Section with Image */}
        <div className="col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
          <img
            src="https://zerodha.com/static/images/account_open.png"
            alt="Zerodha Products"
            className="img-fluid mb-4"
            style={{ maxWidth: "300px" }}
          />
          <p className="text-center text-muted">
            Trade stocks, invest in direct mutual funds, and manage portfolios
            in one place.
          </p>
        </div>

        {/* Right Section with Signup Form */}
        <div className="col-md-6 p-5">
          <h3 className="mb-4 text-primary">Signup Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
