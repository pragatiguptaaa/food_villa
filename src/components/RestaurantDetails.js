import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Shimmer from "./Shimmer";
import { RESTAURANT_IMG_COMMON_URL } from "../constants";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { addItem} from "../utils/cartSlice";

/**Dynamic Routing : Step 3: Read dynamic URL to show details */
const RestaurantDetails = () => {

    const {restaurantId} = useParams();
    const restaurantDetails = useRestaurantDetails(restaurantId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    return ( (!restaurantDetails)
             ? (<Shimmer/>) 
             : (<div className ="m-2 min-w-full">
             <div>
             <h1>Restaurant Id: {restaurantId}</h1>
                <h2>Restaurant Name: {restaurantDetails?.cards[0]?.card?.card?.info?.name} </h2>
                <img className ="h-100 w-100  px-4 py-4" alt ="Restaurant image" src= {RESTAURANT_IMG_COMMON_URL + restaurantDetails?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3> City: {restaurantDetails?.cards[0]?.card?.card?.info?.city} </h3 >
                <h3> Rating: {restaurantDetails?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
             </div>
             <div>
                <h1>Today Menu</h1>
                 <ul>
                    { restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) =>(
                     
                               <li key = {item?.card?.info?.id}> 
                                    {item?.card?.info?.name} - <button onClick={() => addFoodItem(item?.card?.info)}> Add Item </button>
                               </li>
                     
                    ))}
                </ul>
            </div>
               </div>)
          );
};

export default RestaurantDetails;