import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function QuestForm() {
  return (
    <div>
      <Formik initialValues={} validationSchema={} onSubmit={}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="input" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="input" name="description" />
            <ErrorMessage name="description" component="div" />
            <Field type="input" name="difficulty" />
            <ErrorMessage name="difficulty" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default QuestForm;
