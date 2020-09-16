import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import registerFormSchema from './RegisterFormSchema';

function RegisterForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={registerFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
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
