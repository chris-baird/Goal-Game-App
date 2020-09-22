const router = require("express").Router();
const profileRoutes = require("./profile");
const questRoutes = require("./questRoutes");

router.use("/profile", profileRoutes);
router.use("/quests", questRoutes);

module.exports = router;
