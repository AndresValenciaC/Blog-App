const router = require("express").Router();
const Post = require("../models/Post");

// Create Post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json("Post not found");
  }
});
// Get All Post
router.get("/", async (req, res) => {
  const userName = req.query.user;
  const catName = req.query.categories;

  try {
    let posts;
    if (userName) {
      posts = await Post.find({ userName });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: catName,
        },
      });
    } else {
      // will fetch all posts
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json("Post not found");
  }
});

//Update Post
router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userName === req.body.userName) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json("updated Post");
      }
    } else {
      res.status(401).json("You can only update your account");
    }
  } catch (error) {
    res.status(500).json("Wrong post");
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userName === req.body.userName) {
      try {
        await post.delete();
        res.status(200).json("Post deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can only delete your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
