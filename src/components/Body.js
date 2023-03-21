import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import useRestaurants from '../utils/useRestaurants.js';

import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper.js';
import UserContext from '../utils/UserContext.js';

const Body = () =>{

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurants();
    const {user, setUser} = useContext(UserContext);
    
    return  (   (allRestaurants?.length === 0 )
                ? (<Shimmer />)
                :(
                    <>  
                        <div className = "search-container flex p-2 m-2 justify-end">
                            <input p-2 m-2 className ="search-input h-13 border-emerald-50 bg-white focus:bg-blue-100"
                                type="text" 
                                placeholder="Search your favorite restaurants here..."
                                value={searchText}
                                onChange={(e) =>{
                                    setSearchText(e.target.value);
                                    setUser({name:e.target.value, email: e.target.value})
                                }} >
                            </input>
                            <button 
                                className="search-button p-2 m-2 bg-blue-500 text-black rounded-md hover:bg-blue-600"
                                onClick={() => {
                                    setFilteredRestaurants(filterData(searchText, allRestaurants));
                                }}>
                                Search
                            </button>
                        </div>
                        <div className="restaurant-list flex bg-white p-2 m-2">
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