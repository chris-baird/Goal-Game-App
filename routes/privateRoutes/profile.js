const express = require("express");
const userContoller = require("../../controllers/userController");

const router = express.Router();

//Displays information tailored according to the logged in user
router.get("/:id", userContoller.getUserData);

module.exports = router;
