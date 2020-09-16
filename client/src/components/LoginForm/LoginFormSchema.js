import * as yup from 'yup';

const userLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default userLoginSchema;
