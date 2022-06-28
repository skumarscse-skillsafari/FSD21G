import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, deletePost, key }) => {
  return (
    <div>
      <tr>
        <td>{post.username}</td>
        <td>{post.description}</td>
        <td>{post.duration}</td>
        <td>{post.date.substring(0, 10)}</td>
        <td>
          <Link to={`/edit/${post._id}`}>edit</Link> |{" "}
          <a
            href="#"
            onClick={() => {
              post.deletePost(post._id);
            }}
          >
            delete
          </a>
        </td>
      </tr>
    </div>
  );
};

export default Post;
