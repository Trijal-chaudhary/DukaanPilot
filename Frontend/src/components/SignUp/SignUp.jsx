import React, { useState } from "react";
import "./SignUp.css";
import { submitDetails } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    businessType: "",
    city: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await submitDetails(formData);
    navigate("/login");
  };

  return (
    <div className="signup5582">
      <div className="card5582">
        <h2>Create Your Account</h2>
        <p className="sub5582">Start managing your Dukaan smarter </p>

        <form className="form5582" onSubmit={handelSubmit}>
          <input
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
          />

          <input
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Owner Name"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
          >
            <option value="">Business Type</option>
            <option value="Grocery">Grocery</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Other">Other</option>
          </select>

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />

          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button className="btn5582" type="submit">
            Sign Up
          </button>

          <p className="login5582">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
