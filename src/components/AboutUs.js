import React from "react";
import {Outlet} from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const AboutUs= () => {
    return(
        <>
            <h1>Welcome to the About page!!!!</h1>
            <Profile/>
            <ProfileClass name="Pragati" />
        </>
    );
};


export default AboutUs;