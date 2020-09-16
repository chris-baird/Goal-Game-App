import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import registerFormSchema from './RegisterFormSchema';
import API from '../../API';

function RegisterForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={registerFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const registeredUser = await API.registerUser(values);
          console.log(registeredUser);
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
