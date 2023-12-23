const User = require("./../model/user")


const SignUp = async (req,res) => {
const {name,password,email} = req.body;



try {

    const exiestingUser = await User.findOne({ email: email });

    if (!email || !name || !password) {
      return res.json({ msg: "Please fill all the input fields" });
    } else if (exiestingUser) {
      return res.json({ msg: "User is already registered" });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      await user.save();
      return res.json({ msg: "User SignUp successfully" });
    }
} catch (error) {
    return res.json({msg:error})
}

}

const Login = async (req,res)=>{
    const {email ,password} = req.body;
  try {
    if(!email || !password){
        return res.json({msg:"Please enter email and password"});
    }


      const userEmail = await User.findOne({ email: email });
      const userPassword = await User.findOne({ password: password });
      if (userEmail && userPassword) {
        return res.json({ msg: "User Logged In Successfully!!" });
      } else {
        return res.json({ msg: "Incorrect email or password !!" });
      }

      
  } catch (error) {
    
    return res.json({msg:error});
  
  }
       
    

}



module.exports = {SignUp,Login};