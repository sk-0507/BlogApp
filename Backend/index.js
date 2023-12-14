const express = require("express")
const app = express()
const dotenv = require('dotenv')
const {Connection} = require("./db")
const userRoutes = require("./routes/user")
const cors = require("cors")

dotenv.config()
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
app.use(express.json());
app.use(cors());
Connection();




app.use("/api/v1/user",userRoutes);


