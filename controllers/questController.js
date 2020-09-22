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
      const createdQuest = await UserModel.findByIdAndUpdate(
        req.params.userId,
        {
          $push: {
            quests: req.body,
          },
        },
        { safe: true, upsert: true }
      );
      res.json({
        message: "Quest created successfully.",
        createdQuest,
      });
    } catch (error) {
      res.json({
        message: "Something went wrong. Try again.",
        error,
      });
    }
  },
};
