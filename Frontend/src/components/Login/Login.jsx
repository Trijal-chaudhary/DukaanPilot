import React, { useState } from "react";
import "./Login.css";
import { loginDetails } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const response = await loginDetails(formData);
    // if(response)
    console.log(response);
    if (response.message === "yes") {
      navigate("/");
    } else {
      alert("not found");
    }
  };

  return (
    <div className="login7743">
      <div className="card7743">
        <h2>Welcome Back</h2>
        <p className="sub7743">Login to continue managing your Dukaan</p>

        <form className="form7743" onSubmit={handleSubmit}>
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

          <button className="btn7743" type="submit">
            Login
          </button>

          <p className="signup7743">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
