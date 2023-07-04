const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/:abc", newsController.abc);
router.get("/", newsController.index);

module.exports = router;
