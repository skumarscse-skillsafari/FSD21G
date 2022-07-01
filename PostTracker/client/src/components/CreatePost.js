import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    username: "",
    description: "",
    duration: "",
    date: new Date(),
    users: [],
  });
  // console.log(post);

  useEffect(() => {
    axios
      .get("https://posttracker-backend.herokuapp.com/users")
      .then((res) => {
        // console.log(res.data);
        if (res.data.users.length > 0) {
          setPost((prevPost) => {
            return {
              ...prevPost,
              users: res.data.users.map((user) => user.username),
              username: res.data.users[0].username,
            };
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleChangeDate = (date) => {
    setPost((prevData) => {
      return {
        ...prevData,
        date: date,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: post.username,
      description: post.description,
      duration: post.duration,
      date: post.date,
    };

    axios
      .post("https://posttracker-backend.herokuapp.com/posts/add", newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <div>
      <h3>Create New Post</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            name="username"
            value={post.username}
            onChange={handleChange}
          >
            {post.users.map((user, index) => {
              return (
                <option key={index} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            name="description"
            value={post.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input
            type="text"
            required
            className="form-control"
            name="duration"
            value={post.duration}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker selected={post.date} onChange={handleChangeDate} />
        </div>
        <br />
        <div>
          <input
            type="submit"
            value="Create Post"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
