import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_IMG_COMMON_URL, RESTAURANT_DETAILS_COMMON_URL } from "../constants";

/**Dynamic Routing : Step 3: Read dynamic URL to show details */
const RestaurantDetails = () => {

    const {restaurantId} = useParams();
    const [restaurantDetails , setRestaurantDetails] = useState({});

    async function getResturantDetails(){
        const data = await fetch( RESTAURANT_DETAILS_COMMON_URL + restaurantId );
        const json = await data.json();
        console.log(json.data);
        setRestaurantDetails(json.data);
    }

    useEffect(()=>{
        getResturantDetails();
    },[]);

    return ( (!restaurantDetails)
             ? (<Shimmer/>) 
             : (<>
             <div>
             <h1>Restaurant Id: {restaurantId}</h1>
                <h2>Restaurant Name: {restaurantDetails?.name} </h2>
                <img alt ="Restaurant image" src= {RESTAURANT_IMG_COMMON_URL + restaurantDetails.cloudinaryImageId} />
                <h3> City: {restaurantDetails?.city} </h3 >
                <h3> Rating: {restaurantDetails?.avgRating} stars</h3>
             </div>
             <div>
                <h1>Today Menu</h1>
                 <ul>
                    { Object.values(restaurantDetails?.menu?.items).map((item) =>(
                               <li key = {item.id}> {item.name} </li>
                    ))}
                </ul>
            </div>
               </>)
          );
};

export default RestaurantDetails;