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
      const newQuest = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            quests: req.body,
          },
        },
        { safe: true, upsert: true }
      );
      res.json({
        message: "Quest created",
        quest: newQuest,
      });
    } catch (error) {
      res.json(error);
    }
  },
};
