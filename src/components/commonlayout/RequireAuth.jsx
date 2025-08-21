import React from 'react'
import { AuthContext } from '../backend/context/Auth';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const RequireAuth = ({children}) => {
    const {user}= useContext(AuthContext);
    if (!user) {
        // If user is not authenticated, redirect to login page
        return <Navigate to="/admin/login" replace />;
    }
  return children
}

export default RequireAuth