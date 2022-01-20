import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import "./Register.css"
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const { registerUser, errorMessage } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = registerData => {
        if (registerData.password !== registerData.password2) {
            alert('Password not match');
            return
        }
        else {
            registerUser(registerData.email, registerData.password, registerData.name, navigate);
            reset();
        }

    }
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <div className=''>
                <h3>Create your account</h3>

                <form className='registation-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='Email' type='email' {...register("email", { required: true })} />
                    <input placeholder='Password' type="password" {...register("password", { required: true, minLength: 6 })} />
                    <input placeholder='Confirm Password' type="password" {...register("password2", { required: true, minLength: 6 })} />
                    <Button type='submit'> Create Account</Button>
                </form>
                <p>Already have an account?<Link to='/login'>Login</Link></p>

            </div>
        </div>
    );
};

export default Register;