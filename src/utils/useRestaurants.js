import React, {useState, useEffect } from "react";

import {SWIGGY_GET_ALL_RESTAURANTS_URL } from '../constants.js';

const useRestaurants = () =>{
   const [allRestaurants, setAllRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   async function getRestaurants()
   {
    const data = await fetch(SWIGGY_GET_ALL_RESTAURANTS_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect(()=>{
       getRestaurants();
   }, []);

   return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurants;