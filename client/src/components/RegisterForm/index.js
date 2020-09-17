import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import registerFormSchema from "./RegisterFormSchema";
import API from "../../API";
import Error from "../Error";

function RegisterForm({ setUser, user, history }) {
  useEffect(() => {
    console.log(user);
    if (user) return history.push("/goalquest/dashboard");
  }, [user, history]);
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={registerFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { user } = await API.registerUser(values);
            setSubmitting(false);
            setUser(user);
          } catch (error) {
            if (error) return <Error />;
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
