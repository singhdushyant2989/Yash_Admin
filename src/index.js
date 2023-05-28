import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import DashBoard from './layouts/Dashboard/Dashboard';
import Admin from './layouts/Admins/Admins';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
  },
  {
    path: 'admin-panel/dashboard',
    element: <DashBoard />,
  },
  {
    path: 'admin-panel/admins',
    element: <Admin />,
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

