import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const navigate = useNavigate();
    const { loginUser, errorMessage } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = loginData => {
        loginUser(loginData.email, loginData.password, navigate);
        reset()
    }
    return (
        <div className='text-center mt-5'>
            <h3>LogIn</h3>
            <form className='mt-5 login-form' onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder='email' {...register("email", { required: true })} />
                <input type='password' placeholder='password' {...register("password", { required: true })} />
                <input type="submit" />
            </form>
            <p>Don't have account?<Link to="/register">Please Register</Link></p>

        </div>
    );
};

export default Login;