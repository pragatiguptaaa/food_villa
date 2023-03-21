import React, { useState, useEffect }from "react";

import { RESTAURANT_DETAILS_COMMON_URL } from "../constants";

const useRestaurantDetails = (restaurantId) =>{
    const [restaurantDetails , setRestaurantDetails] = useState(null);

    async function getResturantDetails(){
        const data = await fetch( RESTAURANT_DETAILS_COMMON_URL + restaurantId );
        const json = await data.json();
        console.log("Restaurant details"+json.data);
        setRestaurantDetails(json.data);
    }

    useEffect(()=>{
        getResturantDetails();
    },[]);

    return restaurantDetails;
}

export default useRestaurantDetails;