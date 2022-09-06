import React, { forwardRef, useRef, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Values {
    firstName: string;
    lastName: string;
    email: string;
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

const FormComp = () => {
    const [values,setValues]= useState<any>(initialValues);
    
    

    const dataHandler =()=>{
    }
    const inputHandler=(e:any)=>{
      const {name,value}=e.target;
      setValues({
        ...values,
        [name]:value
      })
    }
  return (
    <div>
      <h1>Signup</h1>
      {values.firstName}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form onSubmit={dataHandler}>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John"  value={values.firstName} onChange={inputHandler}  />
           <br/> <br/>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" value={values.lastName} onChange={inputHandler} />
          <br/> <br/>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
            value={values.email}
            // onChange={(e)=>setEmail(e.target.value)}
          />
          <br/> <br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormComp;