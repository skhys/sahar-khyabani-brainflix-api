const express = require("express");
const cors = require("cors");
const app = express();
const vidRouter = require("./routes/videos.js");

require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/videos", vidRouter);

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
