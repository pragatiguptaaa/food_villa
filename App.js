// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import VillaErrorPage from './src/components/VillaErrorPage';
import AboutUs from './src/components/AboutUs';
import ProfileClass from './src/components/ProfileClass';

/**
    -Header
        -Logo
        -Nav bar items
    -Body
        -Search Bar
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

const HeaderComponent = () =>{
    return(
        <div className='header'>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Footer = () =>{
    return (<h4> Footer </h4>);
};




const FoodVillaAppLayout = () => {
    return(
           <>
                <HeaderComponent/>  
                <Outlet/>
                <Footer/> 
            </>
         
          );
};

const foodVillaAppRouter = createBrowserRouter([
    {
        path: "/",
        element: <FoodVillaAppLayout/>,
        errorElement: <VillaErrorPage/>,
        children: 
        [
            {
                path: "about",                         //Absolute Path : /about
                element: <AboutUs/>,
                children:
                [
                    {
                        path: "profile",              //Absolute Path : /about/profile
                        element: <ProfileClass />
                    }
                ]
            }
        ]
    }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {foodVillaAppRouter} />);