import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useRestaurants from '../utils/useRestaurants.js';

import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper.js';



const Body = () =>{

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurants();
    
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