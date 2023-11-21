import React, { useState } from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from 'react-router';

function Login() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = (dnarID: string, password: string) => {

    };

    const formik = useFormik({
        initialValues: {
            dnarID:"",
            password:"",
        },
        onSubmit: (values) => {
            setLoading(true);
            handleLogin(values.dnarID, values.password);
        },
        validationSchema: Yup.object({
            dnarID: Yup.string().trim().required("The ID is required"),
            password: Yup.string().trim().required("The password is required")
        }),
    });
    return (
        <div className="h-screen flex bg-gray-bg1">
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2x1 font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='space-y-4'>
                        <input
                            className='border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500' 
                            id='dnarID'
                            type="id"
                            placeholder='200120000'
                            name='dnarID'
                            value={formik.dnarID}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.dnarID ? <div>{formik.errors.dnarID}</div> : null}
                        <input
                            className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password ? (
                            <div>{formik.errors.password} </div>
                        ) : null}
                    </div>
                    <div className='text-danger text-center my-2' hidden={false}>
                        {message}
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded border-gray-300 p-2 w-32 bg-blue-700 text-white"                       
                        >
                        Login                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login