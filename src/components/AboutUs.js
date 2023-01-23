import React from "react";
import {Outlet} from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class AboutUs extends React.Component{

    constructor(props){
        super(props);
        console.log("About - Parent - Constructor");
    }

    componentDidMount(){
        console.log("About - Parent - CompoenntDidMount");
    }

    render(){
        console.log("About - Parent - Render");
        return(
            <>
                <h1>Welcome to the About page!!!!</h1>
                <ProfileClass name="Pragati" />
                <ProfileClass name="Riya" />
            </>
        );
    }
    
}


export default AboutUs;