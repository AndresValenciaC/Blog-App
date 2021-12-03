import React from "react";
import "./homePage.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import Posts from "../../components/posts/Posts";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
export default function HomePage() {
  //const location = useLocation();
  const { search } = useLocation();
  console.log(search);
  // Data State
  const [posts, setPosts] = useState([]);
  // Fetch Data
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/" + search);
      setPosts(res.data);
    };

    fetchPosts();
  }, [search]); // Empty array means just fire useEffect at beginning

  return (
    <>
      <Header />
      <div className="homePageContainer">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
