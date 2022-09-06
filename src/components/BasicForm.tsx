import React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
 
  interface MyFormValues {
    firstName: string;
  }

const BasicForm:React.FC<{}> = () => {
    const initialValues: MyFormValues ={firstName:''}
  return (
    <>
    <Formik
    initialValues={initialValues}
    onSubmit={(values,actions)=>{
        console.log({values,actions})
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }}
    >
        <Form>
        <label htmlFor="firstName">First Name</label>
           <Field id="firstName" name="firstName" placeholder="First Name" />
           <button type="submit">Submit</button>
        </Form>
    </Formik>
    </>
  )
}

export default BasicForm;