import React from "react";
import {Outlet} from "react-router-dom";

const AboutUs= () => {
    return(
        <>
            <h1>Welcome to the About page!!!!</h1>
            <Outlet/>
        </>
    );
};


export default AboutUs;