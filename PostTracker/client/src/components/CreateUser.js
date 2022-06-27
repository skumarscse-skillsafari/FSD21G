import React from "react";

const CreateUser = () => {
  return (
    <div>
      <h3>Create New User</h3>
      <form>
        <div className="form-group">
          <label>Username: </label>
          <input type="text" required className="form-control" />
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
