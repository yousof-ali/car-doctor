import * as React from "react";

import {
  createBrowserRouter,
  
} from "react-router-dom";
import App from "../App";
import '../index.css'
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        
        }
    ]
  },
]);

export default router
