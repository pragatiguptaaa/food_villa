import React from "react";
import {useSelector} from 'react-redux';
import appReduxStore from '../utils/AppReduxStore';
import FoodItem from "./FoodItem";

const Cart = () =>{

    //Not subscring to the appReduxStore - because it will re-render if any of the stste variabel changes in the store
    //i.e improving the performance by subscring to the required varibale - items from the cart slice of the appReduxStore
    const cartItems = useSelector((appReduxStore) => appReduxStore.cart.items);

    return(
        <>
           <h1> {cartItems.length} Items added </h1>
           { 
                cartItems.map(cartItem => {
                    <FoodItem key = {cartItem.id} {...cartItem} />
                })
            }
        </>
    )
}

export default Cart;