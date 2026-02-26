import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";

const Login = () => {

  const student = {
    email: "",
    password: ""
  };

  const [data, setData] = useState(student);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("User"));

    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      alert("Login Successful ✅");
    } else {
      alert("Invalid Email or Password ❌");
    }
  }

  return (
    <div className="container">
      <div className="box">
        <img src="https://www.pngall.com/wp-content/uploads/15/Login-PNG-HD-Image.png" alt="" />
      </div>

      <form onSubmit={handleSubmit} className="form">
        <h1 className="heading">Welcome to Shopnexa</h1>

        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="password"
          onChange={handleChange}
        />

        <button className="btn">Submit</button>
      </form>

      <p>
        Don't have an account?
        <Link to="/signup"> Signup</Link>
      </p>
    </div>
  );
};

export default Login;