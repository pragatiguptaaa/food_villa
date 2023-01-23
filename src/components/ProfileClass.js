import React from "react";
import { render } from "react-dom";

class ProfileClass extends React.Component{

    constructor(props)
    {
        super(props);
        console.log("Profile - Child - Constructor");
        this.state = {
            count: 0,
            userInfo: {}
        }
    }

     componentDidMount(){
        console.log("Profile - Child - ComponentDidMount - Started");

        this.timer = setInterval(()=>console.log("I am logging after every sec"), 1000);

        //API Call
        // const data = await fetch("https://www.google-analytics.com/j/collect?v=1&_v=j99&a=1812485248&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Frestaurants%2Fbhartiya-jalpan-varthur-sarjapur-road-bangalore-628617&ul=en-us&de=UTF-8&dt=Bhartiya%20Jalpan%20%7C%20Home%20delivery%20%7C%20Order%20online%20%7C%20Varthur%20Sarjapur%20Road%20Bangalore&sd=24-bit&sr=1536x864&vp=222x697&je=0&_u=QACAAEABAAAAACAAI~&jid=&gjid=&cid=950034582.1673104011&tid=0&_gid=667178416.1674479112&_slc=1&gtm=2wg1i0MJV7Q8Q&z=1699936068");
        // // const json = await data.json();
        // this.setState({userInfo: {name:"hello"}});
        console.log("Profile - Child - ComponentDidMount - Finished");
    }

    componentDidUpdate()
    {
        console.log("Profile - Child - ComponentDidUpdate");
    }

    componentWillUnmout(){
        clearInterval(this.timer);
        console.log("Profile - Child - Compoennt will Unmount");
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