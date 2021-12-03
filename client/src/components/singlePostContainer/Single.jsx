import React from "react";
import { useLocation } from "react-router";
import { useState, useEffect, useContext } from "react";
import "./single.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
export default function Single() {
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  const path = location.pathname.split("/")[2];
  //console.log(path);
  const [singlePost, setSinglePost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setSinglePost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
    };
    fetchPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${singlePost._id}`, {
        data: { userName: user.userName },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${singlePost._id}`, {
        userName: user.userName,
        title,
        description: desc,
      });
      // window.location.reload("/singlePost");
      setUpdateMode(false);
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={singlePost.image} alt="" />
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {singlePost.userName === user?.userName && (
              <div className="singlePostEdit">
                <i
                  class="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  class="singlePostIcon fas fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${singlePost.userName}`}>
              <b>{singlePost.userName}</b>
            </Link>
          </span>
          <span>{new Date(singlePost.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescTxtArea"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostBtn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
