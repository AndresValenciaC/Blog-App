import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [userName, setUserName] = useState("");
  console.log(userName);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        userName,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div
      className="registerContainer"
      style={{
        backgroundImage: "url(/assets/images/background2.jpg)",
        backgroundSize: "cover",
      }}
    >
      {/* <img src="assets/images/background1.jpg" alt="" className="postImg" /> */}
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="Btn1">
          Register
        </button>
      </form>
      <button className="Btn2">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something Went Wrong!
        </span>
      )}
    </div>
  );
}
