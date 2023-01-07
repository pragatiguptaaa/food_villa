// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';


/**
    -Header
        -Logo
        -Nav bar items
    -Body
        -Search Bar
        -Restaurant list
             -Restaurant Card
                -Image
                -Name
                -Rating
                -Cusines
        -Footer
            -Copyright
            -Other important links 
**/ 
const TitleComponent = () =>{
    return (
        <img className="logo" alt ="Food Villa Logo"
             src ="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
    );
};

const HeaderComponent = () =>{
    return(
        <div className='header'>
            <TitleComponent />
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

const Body = () =>{
    return (<h4> Body </h4>);
};

const Footer = () =>{
    return (<h4> Footer </h4>);
};

const FoodVillaAppLayout = () => {
    return(
           <>
                <HeaderComponent/>  
                <Body/>
                <Footer/> 
            </>
         
          );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodVillaAppLayout />);