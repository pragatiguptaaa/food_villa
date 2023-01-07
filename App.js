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

const burgerKing = {
    name: "Burger King",
    image: "https://b.zmtcdn.com/data/pictures/chains/6/18347416/c9fbbf2eed4d4ab83ce63b114e76b57f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cusines: ["Burger", "American"],
    rating: "4.2"
}

const RestaurantCard = () =>{
    return (
        <div className="restaurantCard">
            <img alt ="Burger king image"
                src= {burgerKing.image} ></img>
            <h2> {burgerKing.name} </h2>
            <h3> {burgerKing.cusines.join(",")} </h3>
            <h4> {burgerKing.rating} stars </h4>
        </div>
    );
};

const Body = () =>{
    return (
    <div className="restaurant-list">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>);
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