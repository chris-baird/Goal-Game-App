const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  missionPoints: {
    type: Number,
    required: true,
    default: 0,
  },
});

const QuestModel = mongoose.model("quest", QuestSchema);

module.exports = { QuestModel, QuestSchema };
