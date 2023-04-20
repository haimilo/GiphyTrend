import React from 'react';
import { Navigate } from 'react-router-dom';
// import IdleTimerContainer from 'root/idleTimer/IdleTimerContainer';
import { isValidToken } from '../../services/auth';

export const PrivateRoute = ({ children }: any) => {
  const isAuth = isValidToken();

  return (
    <>
      {isAuth ? (
        <>
          {/* <IdleTimerContainer /> */}
          {children}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
