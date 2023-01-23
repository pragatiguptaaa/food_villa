import React from "react";
import { render } from "react-dom";

class ProfileClass extends React.Component{
    render(){
        return (
            <>
             <h1> Profile class compoent</h1>
             <h2> Your name: {this.props.name} </h2>
            </>
        );
    }
}


export default ProfileClass;