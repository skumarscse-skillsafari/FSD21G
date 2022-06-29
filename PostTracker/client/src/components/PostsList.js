import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post._id !== id));
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>List of all the posts</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((currentPost) => {
            return (
              <Post
                post={currentPost}
                deletePost={deletePost}
                key={currentPost._id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostsList;
