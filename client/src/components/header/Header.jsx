import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerTitles">
        <span className="headerTitle1">Titulo uno & Titulo dos</span>
        <span className="headerTitle2">Solo Titulo</span>
      </div>
      <img src="assets/images/1.jpeg" alt="" className="headerImg" />
    </div>
  );
}
