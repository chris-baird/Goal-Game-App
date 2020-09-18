const QuestModel = require("../model/quest");

module.exports = {
  createQuest: async (req, res) => {
    const newQuest = await QuestModel.create(req.body);
    res.json({
      message: "Quest created",
      quest: newQuest,
    });
  },
};
