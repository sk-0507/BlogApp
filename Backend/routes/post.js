const Router = require('express');
const {VerifyJwt} = require('../middlewares/authorization')
const { savePost, updatePost, deletePost, getPost } = require('../controller/post');
const router = Router();

router.post("/savePost",VerifyJwt,savePost)
router.put("/updatePost/:id",VerifyJwt,updatePost)
router.delete("/deletePost/:id",VerifyJwt, deletePost)
router.get("/getPost",getPost)

module.exports = router;