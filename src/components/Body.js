import RestaurantCard from './RestaurantCard.js';
import { restaurantList } from '../constants.js';
import {useState} from 'react';

function filterData(searchText, restaurants)
{
    return restaurants.filter((restaurant)=>
    {
        restaurant.data.name.includes(searchText);
    });
}

const Body = () =>{
    const [searchText, setSearchText] = useState("KFC");
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div className = "search-container">
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="search"
                    value={searchText}
                    onChange = {(e) =>{
                        setSearchText(e.target.value);
                    }} >
                </input>
                <button 
                    className="search-button"
                    onClick ={() => {
                        setRestaurants(filterData(searchText, restaurants));
                    }}>
                    Search {searchText}.
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