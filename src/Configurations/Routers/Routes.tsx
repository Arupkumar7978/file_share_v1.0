import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ErrorPage from '../../Components/Error';
import UserLogin from '../../Containers/Authentication/UserLogin';
import { BASE_URI, PATH_CONSTANTS } from './constants';

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: []
  },
  {
    path: `/${BASE_URI}/auth/user-authentication/user-login/session`,
    element: <UserLogin />
  }
]);
