const express = require("express");
const fs = require("fs");
const router = express.Router();

const readVideoData = () => {
  const videosData = fs.readFileSync(`./data/video-details.json`);
  return JSON.parse(videosData);
};

const writeVideoData = (videos) => {
  fs.writeFileSync(
    `./data/video-details.json`,
    JSON.stringify(videos, null, 2)
  );
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

router.post("/", (req, res) => {
  const {
    title,
    description,
    image,
    channel,
    likes,
    views,
    timestamp,
    comments,
  } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required." });
  }

  const videos = readVideoData();
  const newVideo = {
    id: (videos.length + 1).toString(),
    title,
    description,
    channel,
    image,
    comments,
    likes,
    views,
    timestamp,
  };

  videos.push(newVideo);
  writeVideoData(videos);
  res.status(201).json(newVideo);
});

module.exports = router;
