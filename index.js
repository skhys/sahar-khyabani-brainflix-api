const express = require("express");
const app = express();
const vidRouter = require("./routes/videos.js");

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/videos", vidRouter);

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
