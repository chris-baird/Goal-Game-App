const express = require("express");
const questController = require("../../controllers/questController");

const router = express.Router();

//Displays information tailored according to the logged in user
router.post("/create/:id", questController.createQuest);
router.get("/:id", questController.getQuests);

module.exports = router;
