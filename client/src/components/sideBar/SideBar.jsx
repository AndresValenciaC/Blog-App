import React from "react";
import "./sideBar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function SideBar() {
  const [cate, setCate] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchCate = async () => {
      const res = await axios.get("/cat");
      setCate(res.data);
    };
    fetchCate();
  }, []);

  return (
    <div className="sideBarContainer">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src={user?.profilePic} alt="" className="sideBarTitleImg" />
        <p className="sideBarAbout">
          loreAd duis occaecat quis irure duis elit in incididunt sit Lorem
          fugiat. Qui qui enim incididunt Lorem et eiusmod officia mollit
          exercitation occaecat nisi irure nostrud. Magna{" "}
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cate.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sideBarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOWS</span>
        <div className="socialContainer">
          <i className="sideBareIcon fab fa-facebook-f"></i>
          <i className="sideBareIcon fab fa-facebook-messenger"></i>
          <i className="sideBareIcon fab fa-twitter"></i>
          <i className="sideBareIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
