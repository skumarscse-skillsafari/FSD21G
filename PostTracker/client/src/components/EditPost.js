import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  // console.log(useParams);
  const { id } = useParams(); // { id: '62b5c43bf13f82120c5a0b1d }
  const [post, setPost] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    axios
      .get(`https://posttracker-backend.herokuapp.com/posts/${id}`)
      .then((res) => {
        setPost((prevPost) => {
          return {
            ...prevPost,
            username: res.data.post.username,
            description: res.data.post.description,
            duration: res.data.post.duration,
            date: new Date(res.data.post.date),
          };
        });
      })
      .catch((err) => console.log(err));

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
      .put(`https://posttracker-backend.herokuapp.com/posts/${id}`, newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <div>
      <h3>Edit Post</h3>
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
          <input type="submit" value="Edit Post" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default EditPost;
