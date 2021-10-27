import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const FormTwo = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{lastName: '' }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(values);
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
      <Form>

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormTwo;