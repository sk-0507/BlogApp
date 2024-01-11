const Post = require("../model/post");

const savePost = async (req, res) => {
  try {
    const { imgUrl, title, desc } = req.body;
    const user = req.user._id
    
    if (!imgUrl || !title || !desc) {
      res.json({ msg: "All fields are required" });
    }
    const exiestinPost = await Post.findOne({
      imgUrl: imgUrl,
      title: title,
      desc: desc,
    
    });
    if (exiestinPost) {
      res.json({ msg: "You are already posted" });
    }
    const posted = new Post({
      imgUrl: imgUrl,
      title: title,
      desc: desc,
      author: user
    });
    await posted.save().then(() => {
      res.json({ msg: "Your Post is save successfully" });
    });
  } catch (error) {
    res.json({ msg: error });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const user = req.user._id
  const { imgUrl, title, desc } = req.body;

  try {
    


    const exiestinPost = await Post.findOne({
      imgUrl: imgUrl,
      title: title,
      desc: desc,
    });
    if (exiestinPost) {
      res.json({ msg: "You are adding same details" });
    }

    const post = await Post.findById(id);
    if(!post){
      res.json({msg:"Post not found"});
    }
    if(post.author.toString() === user.toString()){
       const updatedPost = await Post.findByIdAndUpdate(id, {
         imgUrl,
         title,
         desc,
       },{new:true});
       await updatePost.save();
        if (!updatedPost) {
          res.json({ msg: "Post not found" });
        }else{

          res.json({ msg: "Post Updated successfully" });
        }
    }else{
      res.json({msg:"Invalid user"});
    }

   

   
  } catch (error) {
    res.json({ msg:"cdcd"});
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params; //pramas id from url
    if (!id) {
      res, json({ msg: "Please provide the postid" });
    }
    const user = req.user._id; //user id from jwt token
     
    const post = await Post.findById(id);
    
    if (!post) {
      res.json({ msg: "Post not found" });
    }
    if (user.toString() === post.author.toString()) {
      const deletedPost = await Post.findByIdAndDelete(id);

      if (!deletedPost) {
        res.json({ msg: "Post not found to delete" });
      } else {
        res.json({ msg: "Post is  deleted Successfully" });
      }
    }else{
      res.json({msg:"invalid user"});
    }
  } catch (error) {
    res.json({ msg:"error found in try catch block" });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.find();
    if (!post) {
      res.json({ msg: "Post not found" });
    }
    res.json({ post });
  } catch (error) {
    res.json({ msg: error });
  }
};

module.exports = {
  savePost,
  updatePost,
  deletePost,
  getPost,
};
