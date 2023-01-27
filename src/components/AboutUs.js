import React from "react";
import {Outlet } from "react-router-dom";

const AboutUs = () => {
   return (
       <>
       <h1> Welcome to About Page</h1>
       <Outlet/>
       </>
   );
};

export default AboutUs;