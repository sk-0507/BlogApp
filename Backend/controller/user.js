const User = require("./../model/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SignUp = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const exiestingUser = await User.findOne({ email: email });

    if (!email || !name || !password) {
      res.json({ msg: "Please fill all the input fields" });
    } else if (exiestingUser) {
      res.json({ msg: "User is already registered" });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      await user.save();
      res.json({ msg: "User SignUp successfully" });
    }
  } catch (error) {
    res.json({ msg: error });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
     return res.json({ msg: "Please enter email and password" });
    }

    const user = await User.findOne({
      email: email,
      password: password,
    });
    // if (user) {
    //   const token = jwt.sign({ user: user }, "secret-key", { expiresIn: "1h" });
    //  return res.json({ user: user, token: token });
    // }
    if (!user) {
      return res.json({ msg: "Incorrect email or password !!" });
    } else {
      const token = jwt.sign({ user: user }, "secret-key", { expiresIn: "23h" });
      return res.json({
        msg: "User Logged In Successfully!!",
        user: user,
        token: token,
      });
    }
  } catch (error) {
   return res.json({  error });
  }
};

module.exports = { SignUp, Login };
