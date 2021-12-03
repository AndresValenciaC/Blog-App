import React from "react";
import "./singlePostContainer.css";
import Single from "../../components/singlePostContainer/Single";
import SideBar from "../../components/sideBar/SideBar";
export default function SinglePostContainer() {
  return (
    <div className="singlePostContainer">
      <Single />
      <SideBar />
    </div>
  );
}
