import React from 'react'
import { createBrowserRouter , RouterProvider} from "react-router";

import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {

   let router = createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout /> ,
        children:[
            {
                path:"",
                element:<Login />
            },
            {
                path:"/Register",
                element:<Register />
            }
        ]

    }
    ,
    {
        path:"/mainlayout",
        element:<MainLayout/>
    }
   ])
     
  return <RouterProvider router={router}/>
}

export default AppRoutes