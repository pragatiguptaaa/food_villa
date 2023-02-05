import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/food_villa_downloaded.png";

//Named export
 const Title= () =>{
    return (
        <img className="logo h-28 px-4 py-4" alt ="Food Villa Logo" src ={Logo} />
    );
};

const Header = () =>{

    const [loggedIn, setLoggedIn] = useState(true);

    return(
        <div className='header m-1 flex justify-between bg-red-400 shadow-xl'>
            <Title />
            <div>
                <ul className='nav-items flex py-10'>
                    <Link className ="px-4" to ="/"><li>Home</li></Link>
                    <Link className ="px-4"to ="/contact"><li>Contact</li></Link>
                    <Link className ="px-4" to ="/about"><li>About</li></Link>
                    <Link className ="px-4" to ="/cart"><li>Cart</li></Link>
                </ul>
            </div>
            <button className ="m-10 p-1 bg-yellow-200 text-black rounded-md hover:bg-yellow-300" onClick={() => { setLoggedIn((prevValue) => !prevValue); } } > 
                    {loggedIn?  "Logout" : "Login" }
            </button> 
           
        </div>
    );
};

//default export
export default Header;