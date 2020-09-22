import axios from "axios";
import tokenAPI from "../token";

export default {
  getAllQuestsByUserId,
  craftNewQuest,
};

async function getAllQuestsByUserId(userId) {
  try {
    const token = tokenAPI.getUserToken();
    const userQuests = await axios.get(
      `/user/quest/${userId}/?secret_token=${token}`
    );
    return userQuests;
  } catch (error) {
    return error;
  }
}

async function craftNewQuest(userId, newQuest) {
  try {
    const token = tokenAPI.getUserToken();
    const createdQuest = await axios.post(
      `/user/new-quest/${userId}/?secret_token=${token}`,
      newQuest
    );
    return createdQuest;
  } catch (error) {
    return error;
  }
}
