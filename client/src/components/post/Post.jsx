import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  // const pf = "Localhost:5000/images/";
  return (
    <div className="postContainer">
      <img src={post.image} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        <Link className="link" to={`/singlePost/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
}
