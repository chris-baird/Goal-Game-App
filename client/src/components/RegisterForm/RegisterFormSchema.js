import * as yup from 'yup';

const UserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default UserSchema;
