import React from "react";
import {Outlet} from "react-router-dom";
import Profile from "./Profile";

const AboutUs= () => {
    return(
        <>
            <h1>Welcome to the About page!!!!</h1>
            <Profile/>
            <Outlet />
        </>
    );
};


export default AboutUs;