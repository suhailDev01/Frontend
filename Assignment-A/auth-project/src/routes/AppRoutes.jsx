import React from 'react'
import { createBrowserRouter , RouterProvider} from "react-router";

import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
   ])
     
  return <RouterProvider router={router}/>
}

export default AppRoutes