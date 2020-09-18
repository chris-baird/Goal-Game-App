import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import registerFormSchema from "./RegisterFormSchema";
import API from "../../API";

function RegisterForm({ setUser, user, history }) {
  useEffect(() => {
    if (user) return history.push("/goalquest/town-square");
  }, [user, history]);
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={registerFormSchema}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          try {
            const { user } = await API.registerUser(values);
            setSubmitting(false);
            setUser(user);
          } catch (error) {
            setErrors({
              email: "*Email has been registered.",
            });
            return;
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />

            <ErrorMessage name="email" component="div" />

            <Field type="password" name="password" />

            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default withRouter(RegisterForm);
