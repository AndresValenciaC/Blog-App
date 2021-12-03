const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
      unique: true,
    },
    description: {
      type: "String",
      required: true,
    },
    postPic: {
      type: "String",
      require: false,
    },
    userName: {
      type: "String",
      require: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
