import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import registerFormSchema from './RegisterFormSchema';
import API from '../../API';

function RegisterForm({ setUser, user, history }) {
  useEffect(() => {
    if (user) history.push('/goalquest');
  }, [user]);
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={registerFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { user } = await API.registerUser(values);
            API.loginUser(values);
            setUser(user);
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

export default withRouter(RegisterForm);
