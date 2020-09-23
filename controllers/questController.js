const UserModel = require("../model/user");

module.exports = {
  getQuests: async (req, res) => {
    try {
      const quests = await UserModel.findById(req.params.id)
        .populate("quests")
        .exec();
      res.json({
        message: "Quests retrieved",
        quests: quests,
      });
    } catch (error) {}
  },
  createQuest: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      user.quests.push(req.body);
      const quest = await user.save();
      res.json({
        message: "Quest created successfully.",
        quest: user.quests[user.quests.length - 1],
      });
    } catch (error) {
      res.json({
        message: "Something went wrong. Try again.",
        error,
      });
    }
  },
};
