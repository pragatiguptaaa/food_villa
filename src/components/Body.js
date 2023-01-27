import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer';
import {SWIGGY_GET_ALL_RESTAURANTS_URL } from '../constants.js';


function filterData(searchText, allRestaurants)
 {
     const filteredData = allRestaurants.filter((restaurant)=>
     {  
        return  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
     });
     return filteredData;
 }

const Body = () =>{

    const [searchText, setSearchText] = useState("");
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


    return  (   (allRestaurants?.length === 0 )
                ? (<Shimmer />)
                :(
                    <>  
                        <div className = "search-container">
                            <input 
                                className="search-input" 
                                type="text" 
                                placeholder="Search your favorite restaurants here..."
                                value={searchText}
                                onChange={(e) =>{
                                    setSearchText(e.target.value);
                                }} >
                            </input>
                            <button 
                                className="search-button"
                                onClick={() => {
                                    setFilteredRestaurants(filterData(searchText, allRestaurants));
                                }}>
                                Search
                            </button>
                        </div>
                        <div className="restaurant-list">
                            {
                                filteredRestaurants?.length === 0 
                                ? (<>
                                    <h1> No resturants found!!! Please try searching for some other restaurants.</h1>
                                </>)
                                : filteredRestaurants?.map((restaurant) =>{ 
                                  return (
                                            /*Dynamic Routing : Step 2: Use "Link" to make click on this link to a partiuar URL*/
                                            <Link to = {"/restaurant/"+restaurant.data.id} key ={restaurant.data.id}>
                                                <RestaurantCard {...restaurant.data} />
                                            </Link> 
                                         )
                                  })
                            }
                        </div>
                    </>
                 )
            );
};

 
export default Body;