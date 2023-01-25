import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer';
import { restaurantList, SWIGGY_GET_ALL_RESTAURANTS_URL } from '../constants.js';


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

   
    useEffect(()=>{
       getRestaurants();
   }, []);

   async function getRestaurants(){
    const data = await fetch(SWIGGY_GET_ALL_RESTAURANTS_URL);
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(allRestaurants);
    console.log(filteredRestaurants);
    
 }


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
                                filteredRestaurants.length === 0 ?
                                <h1> No resturants found!!!</h1>
                                : filteredRestaurants?.map((restaurant) =>{ 
                                  return (<RestaurantCard {...restaurant.data} key ={restaurant.data.id}/> )
                                  })
                            }
                        </div>
                    </>
                 )
            );
};

 
export default Body;