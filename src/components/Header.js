import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import food_villa_downloaded from "../assets/images/food_villa_downloaded.png"

//Named export
 const Title= () =>{
    return (
        <img className="logo h-28 px-4 py-4" alt ="Food Villa Logo" src ={food_villa_downloaded} />
    );
};

const Header = () =>{

    const [loggedIn, setLoggedIn] = useState(true);
    const isOnline = useOnline();

    return(
        <div className='header m-1 flex justify-between bg-red-600 sm:bg-red-500 md:bg-red-400  shadow-xl'>
            <Title />
            <div>
                <ul className='nav-items flex py-10'>
                    <Link className ="px-4" to ="/"><li>Home</li></Link>
                    <Link className ="px-4"to ="/contact"><li>Contact</li></Link>
                    <Link className ="px-4" to ="/about"><li>About</li></Link>
                    <Link className ="px-4" to ="/cart"><li>Cart</li></Link>
                    <Link className ="px-4" to ="/instamart"><li>Instamart</li></Link>
                </ul>
            </div>
            <div> 
                <h1>{ isOnline ? "✅" : "🔴" }</h1>
                <button className ="m-10 p-1 bg-yellow-200 text-black rounded-md hover:bg-yellow-300" onClick={() => { setLoggedIn((prevValue) => !prevValue); } } > 
                         {loggedIn?  "Logout" : "Login" }
                </button> 
            </div>
        </div>
    );
};

//default export
export default Header;