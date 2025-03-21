import { createBrowserRouter } from "react-router-dom";
import Layout from '../pages/layout/Layout'
import Notfound from '../pages/layout/Notfound'
import Home from "../pages/home/Home";
import About from "../pages/home/About";
import Education from "../pages/home/Education";
import Skills from "../pages/home/Skills";
import Project from "../pages/project/Project";
import Contact from "../pages/contact/Contact";

export let myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/> 
            },
            {
                path:"/about",
                 element:<About/>,
             },
             {
                path:"/education",
                 element:<Education/>,
             },
             {
                path:"/skills",
                 element:<Skills/>,
             },
             {
                path:"/projects",
                 element:<Project/>,
             },
             {
                path:"/contact",
                 element:<Contact/>,
             },
        ]
    },
    {
        path:"*",
        element:<Notfound/>
    }
])