import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';

const useAuth = () => {
  // Implement your logic to check if the user is authenticated
  const user = localStorage.getItem('user');
  return user ? true : false;
};

const PrivateRoute = () => {
  const auth = useAuth();

  return !auth ? <>
    <Navbar />
    <Outlet />
  </>
    : <Navigate to="/signin" />;
};

export default PrivateRoute;