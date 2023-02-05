import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/food_villa_downloaded.png";

//Named export
 const Title= () =>{
    return (
        <img className="logo" alt ="Food Villa Logo" src ={Logo} />
            //  src ="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
    );
};

const Header = () =>{

    const [loggedIn, setLoggedIn] = useState(true);

    return(
        <div className='flex'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <Link to ="/"><li>Home</li></Link>
                    <Link to ="/contact"><li>Contact</li></Link>
                    <Link to ="/about"><li>About</li></Link>
                    <Link to ="/cart"><li>Cart</li></Link>
                </ul>
                <button onClick={() => { setLoggedIn((prevValue) => !prevValue); } } > 
                        Click here to {loggedIn?  "Logout" : "Login" }
                 </button> 
            </div>
        </div>
    );
};

//default export
export default Header;