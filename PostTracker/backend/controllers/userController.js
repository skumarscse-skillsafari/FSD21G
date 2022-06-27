import User from "../models/userModel.js";

export const createUser = (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username })
    .save()
    .then(() =>
      res.status(200).json({ success: true, msg: "User created successfully" })
    )
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json({ users }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
