import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function TopBar() {
  const { dispatch, user } = useContext(Context);
  //const user = true;
  // const user = false;
  console.log("User en Profile", user);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="topBarContainer">
      <div className="topLeft">
        <i className="topLefIcon fab fa-facebook-f"></i>
        <i className="topLefIcon fab fa-facebook-messenger"></i>
        <i className="topLefIcon fab fa-twitter"></i>
        <i className="topLefIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toplistItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplistItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/Settings">
            <img user src={user.profilePic} alt="" className="img" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="toplistItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="toplistItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i class="topRightIcon fas fa-search-plus"></i>
      </div>
    </div>
  );
}
