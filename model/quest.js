const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestSchema = new Schema({
  questName: {
    type: String,
    required: true,
    unique: true,
  },
  questDescription: {
    type: String,
    required: true,
  },
  questCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  questType: {
    type: String,
    required: true,
  },
  questDifficulty: {
    type: Number,
    required: true,
  },
  questRewardExp: {
    type: Number,
    required: true,
  },
  questRewardGold: {
    type: Number,
    required: true,
  },
  questCreationDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  questMissionPoints: {
    type: Number,
    required: true,
    default: 0,
  },
});

const QuestModel = mongoose.model("quest", QuestSchema);

module.exports = QuestModel;
