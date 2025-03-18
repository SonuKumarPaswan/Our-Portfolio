import { createBrowserRouter } from "react-router-dom";
import Layout from '../pages/layout/Layout'
import Notfound from '../pages/layout/Notfound'
import Home from "../pages/home/Home";
import About from "../pages/home/About";

export let myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
               path:"/about",
                element:<About/>,
            },
            {
               path:"/education",
                element:<Home/>,
            },
            {
               path:"/skills",
                element:<Home/>,
            },
            {
               path:"/projects",
                element:<Home/>,
            },
            {
               path:"/contact",
                element:<Home/>,
            },
        ]
    },
    {
        path:"*",
        element:<Notfound/>
    }
])