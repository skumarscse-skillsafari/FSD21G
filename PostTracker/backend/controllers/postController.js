import Post from "../models/postModel.js";

export const createPost = (req, res) => {
  // console.log(req.body);
  const { username, description } = req.body;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    username,
    description,
    duration,
    date,
  })
    .save()
    .then(() =>
      res.status(201).json({ success: true, msg: "Post created successfully" })
    )
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const getAllPosts = (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json({ posts }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const getPost = (req, res) => {
  const { id: postID } = req.params;
  Post.findById(postID)
    .then((post) => res.status(200).json({ post }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const updatePost = (req, res) => {
  const { id: postID } = req.params;
  Post.findById(postID)
    .then((post) => {
      post.username = req.body.username;
      post.description = req.body.description;
      post.duration = Number(req.body.duration);
      post.date = Date.parse(req.body.date);

      post
        .save()
        .then(() =>
          res
            .status(201)
            .json({ success: true, msg: "Post updated successfully" })
        )
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const deletePost = (req, res) => {
  const { id: postID } = req.params;
  Post.findByIdAndDelete(postID)
    .then(() =>
      res.status(200).json({ success: true, msg: "Post deleted successfully" })
    )
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
