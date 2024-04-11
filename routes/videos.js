const express = require("express");
const fs = require("fs");
const router = express.Router();

const readVideoData = () => {
  const videosData = fs.readFileSync(`./data/videos-details.js`);
  return JSON.parse(videosData);
};

router.get("/", (req, res) => {
  console.log(`I am inside the route /videos/ !`);
  const videos = readVideoData();
  res.json(videos);
});

router.get("/:id", (req, res) => {
  const videos = readVideoData();
  const id = req.params.id;
  const video = videos.find((video) => video.id === id);
  console.log(`I am inside the route /:id !`);
  res.json(video);
});

module.exports = router;
