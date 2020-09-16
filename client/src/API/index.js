import axios from 'axios';
export default {
  registerUser: async (newUser) => {
    const {
      data: { user },
    } = await axios.post('/signup', newUser);

    return user;
  },
};
