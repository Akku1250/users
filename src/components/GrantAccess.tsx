import React from 'react';
import { useUser } from '../utils/providers/Authentication/AuthenticationProvider';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function GrantAccess() {
  const user = useUser();
  const location = useLocation();

  return user ? (
    //this oulet is UserList component
    <Outlet />
  ) : (
    <Navigate
      to={'/login'}
      state={{ from: location }}
      replace
    />
  );
}

export default GrantAccess;
