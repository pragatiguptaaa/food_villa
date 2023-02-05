import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_IMG_COMMON_URL } from "../constants";
import useRestaurantDetails from "../utils/useRestaurantDetails";

/**Dynamic Routing : Step 3: Read dynamic URL to show details */
const RestaurantDetails = () => {

    const {restaurantId} = useParams();
    const restaurantDetails = useRestaurantDetails(restaurantId);

    return ( (!restaurantDetails)
             ? (<Shimmer/>) 
             : (<div className ="m-2 min-w-full">
             <div >
             <h1>Restaurant Id: {restaurantId}</h1>
                <h2>Restaurant Name: {restaurantDetails?.name} </h2>
                <img className ="h-100 w-100  px-4 py-4" alt ="Restaurant image" src= {RESTAURANT_IMG_COMMON_URL + restaurantDetails.cloudinaryImageId} />
                <h3> City: {restaurantDetails?.city} </h3 >
                <h3> Rating: {restaurantDetails?.avgRating} stars</h3>
             </div>
             <div>
                <h1>Today Menu</h1>
                 <ul>
                    { restaurantDetails?.menu?.items && Object.values(restaurantDetails?.menu?.items).map((item) =>(
                               <li key = {item.id}> {item.name} </li>
                    ))}
                </ul>
            </div>
               </div>)
          );
};

export default RestaurantDetails;