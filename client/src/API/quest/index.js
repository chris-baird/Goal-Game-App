import axios from "axios";
import tokenAPI from "../token";

export default {
  getAllQuestsByUserId,
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
