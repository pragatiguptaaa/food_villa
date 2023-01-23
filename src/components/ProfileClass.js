import React from "react";
import { render } from "react-dom";

class ProfileClass extends React.Component{

    constructor(props)
    {
        super(props);
        console.log("Profile - Child - Constructor");
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        console.log("Profile - Child - ComponentDidMount");
    }

    render(){
        console.log("Profile - Child -  Render")
        const {count} = this.state;
        return (
            <>
             <h1> Profile class compoent</h1>
             <h2> Your name: {this.props.name}, Count: {count} </h2>
             <button onClick={() => this.setState({count: count+1})}> Click me to increase count</button>

            </>
        );
    }
}


export default ProfileClass;