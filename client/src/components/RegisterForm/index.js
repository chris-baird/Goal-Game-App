import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import registerFormSchema from './RegisterFormSchema';
import API from '../../API';

function RegisterForm(props) {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={registerFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { user } = await API.registerUser(values);
            API.loginUser(values);
            props.setUser(user);
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

export default RegisterForm;
