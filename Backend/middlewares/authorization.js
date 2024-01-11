const jwt  = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

module.exports.VerifyJwt = async (req,res,next) => {
   try {
     const token = await req.header("Authorization")?.replace("Bearer ","");
     if (!token) {
       return res.status(404).json({ msg: "token not found access denied" });
     }
     const decode = jwt.verify(token,"secret-key");
     
     req.user = decode.user;
     next();
   } catch (error) {
    res.status(500).json({msg:error,msg:"Invalid Token"});
   }
}
 

