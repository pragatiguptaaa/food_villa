import React from "react";

//Named export
 const Title= () =>{
    return (
        <img className="logo" alt ="Food Villa Logo"
             src ="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
    );
};

const Header = () =>{
    return(
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//default export
export default Header;