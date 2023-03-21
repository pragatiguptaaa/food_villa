// These are being imported from node_modues now(We have Removed all CDN links).
import React, {useState, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from './components/Header.js';
import Body from './components/Body';
import {Footer} from './components/Footer';
import ContactUs from './components/ContactUs.js';
const Cart = lazy(() => import("./components/Cart"));
const Instamart = lazy(() => import("./components/Instamart"));

import FoodVillaErrorPage from './components/FoodVillaErrorPage.js';
import AboutUs from "./components/AboutUs";
import Profile from './components/Profile.js';
import RestaurantDetails from './components/RestaurantDetails.js';
import Shimmer from './components/Shimmer.js';

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
    children:
    [
        {
            path: "",                           //absolute path: "/"
            element:<Body/>
        },
        {
            path:"about",                       //absolute path: "/about"
            element: <AboutUs />,
            children:[
                {
                    path:"",                    //absolute path: "/about "
                    element:<Profile />
                },
                {
                    path:"profile",            //absolute path: "/about/profile"
                    element:<Profile />
                }
            ]
        },
        {
            path:"contact",                     //absolute path: "/contact"
            element:<ContactUs/>
        },
        {
            path:"cart",                        //absolute path: "/cart"
            element: (<Suspense fallback = {<ContactUs />}>
                         <Cart/>
                      </Suspense>)
        },
        {
            path:"instamart",                        //absolute path: "/instamart"
            element: (<Suspense fallback = {<Shimmer/>}>
                        <Instamart/>
                        </Suspense>)
        },
        {
            /*Dynamic Routing : Step 1: Attach element to dynamic path */
            path:"restaurant/:restaurantId",              //absolute path: "/restaurant/:restaurantId" :restaurantId --- dynamic value
            element:<RestaurantDetails />
        }
    ]
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {foodVillaAppRouter} />);