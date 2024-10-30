const express = require('express');
const router = express.Router();
const { Posts, sequelize } = require('../models');

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Posts.destroy({ where: { id: id } });
  res.json("Post deleted");
});

module.exports = router;