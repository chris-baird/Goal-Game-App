import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userLoginSchema from "./LoginFormSchema";
import API from "../../API";

function LoginForm({ setUser, history, user }) {
  useEffect(() => {
    if (user) history.push("/goalquest/dashboard");
  }, [user, history]);
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={userLoginSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const user = await API.loginUser(values);
            setUser(user);
            setSubmitting(false);
            history.push("/goalquest");
          } catch (error) {
            setErrors({
              email: "*Invalid Email or Password",
              password: "*Invalid Email or Password",
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

export default withRouter(LoginForm);
