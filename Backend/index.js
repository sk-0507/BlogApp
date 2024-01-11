const express = require("express");
const { Connection } = require("./db");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const cors = require("cors");
const app = express();
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
app.use(express.json());
Connection();

 

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);
