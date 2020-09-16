import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import userLoginSchema from './LoginFormSchema';
import API from '../../API';

function LoginForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={userLoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            API.loginUser(values);
          } catch (error) {
            if (error) throw error;
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

export default LoginForm;
