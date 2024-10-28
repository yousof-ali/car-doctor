import * as React from "react";

import {
  createBrowserRouter,
  
} from "react-router-dom";
import App from "../App";
import '../index.css'
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouter from "./PrivateRouter";
import Service from "../Pages/Home/Service/Service";
import Error from "../Pages/Error";
import Details from "../Pages/Details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:'/book-now/:id',
          element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
          loader:({params}) => fetch(`https://car-doctor-server-delta-nine-48.vercel.app/services/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader:({params}) => fetch(`https://car-doctor-server-delta-nine-48.vercel.app/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRouter><Bookings></Bookings></PrivateRouter>
        },
        {
          path:'/service',
          element:<Service></Service>
        }
    ]
  },
]);

export default router
