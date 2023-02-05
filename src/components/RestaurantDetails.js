import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Shimmer from "./Shimmer";
import { RESTAURANT_IMG_COMMON_URL } from "../constants";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { addItemAction } from "../utils/cartSlice";

/**Dynamic Routing : Step 3: Read dynamic URL to show details */
const RestaurantDetails = () => {

    const {restaurantId} = useParams();
    const restaurantDetails = useRestaurantDetails(restaurantId);

    const dispatch = useDispatch();

    const addFoodItem = (item) =>{
        dispatch(addItemAction(item));
    }

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
                    { restaurantDetails?.menu?.items && Object.values(restaurantDetails?.menu?.items).map((item) =>(
                     <>
                               <li key = {item.id}> 
                                    {item.name} - 
                                    <button onClick={(item) => addFoodItem(item)}> Add Item </button>
                               </li>
                     </>
                    ))}
                </ul>
            </div>
               </>)
          );
};

export default RestaurantDetails;