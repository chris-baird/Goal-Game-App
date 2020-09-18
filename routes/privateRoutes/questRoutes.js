const express = require("express");
const questController = require("../../controllers/questController");

const router = express.Router();

//Displays information tailored according to the logged in user
router.post("/create", questController.createQuest);

module.exports = router;
