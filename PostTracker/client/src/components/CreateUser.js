import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };

    axios
      .post("http://localhost:5000/users", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setUsername("");
    navigate("/");
  };
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
