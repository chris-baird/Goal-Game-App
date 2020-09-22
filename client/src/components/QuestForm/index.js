import React from "react";
import {
  FormGroup,
  Label,
  Button,
  FormText,
  ModalFooter,
  Input as Field,
} from "reactstrap";
import { Formik, Form, ErrorMessage } from "formik";
import QuestFormSchema from "./QuestFormSchema";
import QuestAPI from "../../API/quest";

function QuestForm({ userId, updateQuestList }) {
  console.log(updateQuestList);
  return (
    <div>
      <Formik
        initialValues={{ name: "", description: "", difficulty: 1 }}
        validationSchema={QuestFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const createdQuest = await QuestAPI.craftNewQuest(userId, values);
            console.log(updateQuestList);
            updateQuestList(createdQuest);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, handleBlur, isSubmitting, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Quest Name</Label>
              <ErrorMessage
                className="text-danger"
                name="name"
                component="div"
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="name"
                value={values.name}
              />
              <FormText color="muted">Choose a name for your quest.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="description">Quest Description</Label>
              <ErrorMessage
                className="text-danger"
                name="description"
                component="div"
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                type="textarea"
                name="description"
                value={values.description}
              />
              <FormText color="muted">
                Describe your goal, and be sure to include anything that may
                motivate you to contribute to completing it.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="difficulty">Quest Difficulty</Label>
              <ErrorMessage
                className="text-danger"
                name="difficulty"
                component="div"
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                type="select"
                name="difficulty"
                value={values.difficulty}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
              <FormText color="muted">
                Quest Difficulty represents how hard your goal is to complete.
                The more difficult a quest is, the more rewards you receive from
                completing it.
              </FormText>
            </FormGroup>
            <ModalFooter>
              <Button type="submit" color="success" disabled={isSubmitting}>
                Create Quest
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default QuestForm;
