import RestaurantCard from './RestaurantCard.js';
import { restaurantList } from '../constants.js';
import {useState} from 'react';

const Body = () =>{
    const [searchText, setSearchText] = useState("KFC");
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
                <button className='="search-button'> Search {searchText}</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurantList.map((restaurant) =>{ 
                        return (<RestaurantCard {...restaurant.data} key ={restaurant.data.id}/> )
                    })
                }
                
            </div>
        </>
    );
};
export default Body;