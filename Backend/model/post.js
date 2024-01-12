const mongoose = require("mongoose");
const User = require("../model/user");

const postSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      uppercase:true
    },
    desc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model("Post", postSchema);
