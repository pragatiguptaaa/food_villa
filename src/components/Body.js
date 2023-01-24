import React from 'react';
import RestaurantCard from './RestaurantCard.js';
import { restaurantList } from '../constants.js';
import {useState} from 'react';


function filterData(searchText)
{
    const filteredRestaurants = restaurantList.filter((restaurant)=>
    {  
       return  restaurant.data.name.includes(searchText);
    });
    return filteredRestaurants;
}

const Body = () =>{
    const [searchText, setSearchText] = useState("Search your favorite restaurants here...");
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div className = "search-container">
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="search"
                    value={searchText}
                    onChange={(e) =>{
                        setSearchText(e.target.value);
                    }} >
                </input>
                <button 
                    className="search-button"
                    onClick={() => {
                        setRestaurants(filterData(searchText));
                    }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) =>{ 
                        return (<RestaurantCard {...restaurant.data} key ={restaurant.data.id}/> )
                    })
                }
            </div>
        </>
    );
};

export default Body;