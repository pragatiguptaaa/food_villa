// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from './components/Header.js';
import Body from './components/Body';
import {Footer} from './components/Footer';
import ContactUs from './components/ContactUs.js';
import Cart from './components/Cart.js';

import FoodVillaErrorPage from './components/FoodVillaErrorPage.js';
import AboutUs from "./components/AboutUs";
import Profile from './components/Profile.js';

/**
    -Header
        -Logo
        -Nav bar items
    -Body
        -Search Input and Search Button
        -Restaurant list
             -Restaurant Card
                -Image
                -Name
                -Rating
                -Cusines
    -Footer
        -Copyright
        -Other important links 
**/ 

const FoodVillaAppLayout = () => {
    return(
           <>
                <Header/>  
                <Outlet/>
                <Footer/> 
            </>
          );
};

const foodVillaAppRouter = createBrowserRouter([
{
    path: "/",
    element: <FoodVillaAppLayout />,
    errorElement: <FoodVillaErrorPage />,
    children:[
        {
            path: "",                   //absolute path: "/"
            element:<Body />
        },
        {
            path:"about",                //absolute path: "/about"
            element: <AboutUs />,
            children:[
                {
                    path:"",            //absolute path: "/about "
                    element:<Profile />
                },
                {
                    path:"profile",            //absolute path: "/about/profile"
                    element:<Profile />
                }
            ]
        },
        {
            path:"contact",
            element:<ContactUs/>
        },
        {
            path:"cart",  
            element: <Cart/>
        }
    ]
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {foodVillaAppRouter} />);