import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


export default function PrivateOutlet() {
    const { user } = useAuth()
    console.log(user.email);
    return user.email ? <Outlet /> : <Navigate to='/login' />;
};
