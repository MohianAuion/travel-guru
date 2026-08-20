import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/booking',
                element:(
                    <PrivateRoute>
                        <Booking></Booking>
                    </PrivateRoute>
                )
                
            }
        ]
    },
    
            {
                path:'/contact',
                Component:Contact
            },
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
               index:true,
                Component:Login
            },
            {
                path:'register',
                Component:Register
            }
        ]
    },
    {
        path:'/*',
      Component:Error
    }
]);

export default router;