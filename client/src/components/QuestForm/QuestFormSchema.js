import * as yup from "yup";

const QuestSchema = yup.object().shape({
  name: yup.string().required("*A quest name is required."),
  description: yup.string().required("*A quest description is required."),
  difficulty: yup.number().required("*A quest difficulty is required."),
});

export default QuestSchema;
