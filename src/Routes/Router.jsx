import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    },
    {
        path:'/auth',
        Component:AuthLayout
    },
    {
        path:'/*',
      Component:Error
    }
]);

export default router;