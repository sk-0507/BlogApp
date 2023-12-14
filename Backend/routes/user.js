const Router = require("express")
const router = Router()
const {SignUp, Login} = require("./../controller/user")

router.post("/signUp",SignUp);
router.post("/login",Login);

module.exports = router;
