const router = require("express").Router();
const profileRoutes = require("./profile");

router.use("/profile", profileRoutes);

module.exports = router;
