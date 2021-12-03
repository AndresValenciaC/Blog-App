import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context.js";
import axios from "axios";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  console.log("login-user", user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        userName: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div
      className="loginContainer"
      style={{
        backgroundImage: "url(/assets/images/background1.jpg)",
        backgroundSize: "cover",
      }}
    >
      {/* <img src="assets/images/background1.jpg" alt="" className="postImg" /> */}
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" placeholder="Enter your userName..." ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginBtn" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="registerBtn">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
