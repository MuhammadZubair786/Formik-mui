import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';

function Forms() {

   

    const formik = useFormik({
        initialValues: { email: '', password: '' ,name :'' },
        onSubmit: (data) => {
            console.log(data)
        },
        validate: (value) => {
            let error = {}

            if(!value.name){
                error.name = "Enter Name "
            }

            else if(value.name.length<5){
                error.name='Name Must be Greater Than 5'


            }

            else if (!value.email)
                error.email = 'Email Required'

            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email) ) {
                error.email = 'Invalid email address';
            }



            else if (!value.password)
                error.password = 'Plz Enter Password'

            

            else if(!/^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value.password))
                error.password = 'eNTER Number'

            return error
        }
      
    
        // validationSchema : Yup.object({
        //     name: Yup.string().required('Required'),
        //     password: Yup.string()
        //       .max(20, 'Must be 20 characters or less')
        //       .required('Required'),
        //     email: Yup.string().email('Invalid email address').required('Required'),
        //   })
      
    })


    return (
        <>
            <h1>Hello Forms</h1>

            <form onSubmit={formik.handleSubmit}>

            <label>Name</label>
                <br />
                <input type='text' id='name' value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : ""}
                <br />


                <label>Email</label>
                <br />
                <input type='text' id='email' value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : ""}
                <br />


                <label>Password</label>
                <br />

                <input type='text' id='password' value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : ""}

                <input type='submit' />

            </form>



        </>
    )
}

export default Forms