/** npm init  express dotenv multer nodemon mongoose*/
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
/** Routes import */
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
/** Routes import end*/

/** Path is use to get access to certain parts of the application */
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/imagesFolder")));

/** middlewareFunctions start*/
dotenv.config();
app.use(express.json());
/** middlewareFunctions end*/
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

/** EndPoints start*/
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/cat", categoriesRoute);
/** EndPoints end*/

/** Uploads files with multer */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "imagesFolder");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File uploaded");
});
/**-------------------- */
const port = "5000";
app.listen(port, () => {
  console.log(`Backend its running at port : ${port}`);
});
