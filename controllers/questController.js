const UserModel = require("../model/user");

module.exports = {
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
