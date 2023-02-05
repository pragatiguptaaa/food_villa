import React from "react";

import { RESTAURANT_IMG_COMMON_URL } from '../constants.js';

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) =>{
    return (
        <div className="restaurantCard px-3 py-10 m-2 w-56 bg-slate-100 shadow-md hover:shadow-2xl hover:bg-white">
            <img alt ="Burger king image"
                src= {RESTAURANT_IMG_COMMON_URL+cloudinaryImageId} ></img>
            <h2> {name} </h2>
            <h3 style ={{wordWrap:'break-word'}}> {cuisines.join(",")} </h3>
            <h4 className="bg-green-700 px-10" >{avgRating} stars </h4>
        </div>
    );
};

export default RestaurantCard;