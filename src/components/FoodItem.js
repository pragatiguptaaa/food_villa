import React from "react";
import { RESTAURANT_IMG_COMMON_URL } from "../constants";

const FoodItem = ({ name, description, imageId, price }) => {
    return (
      <div className ="p-2 m-2 bg-slate-100">
        <img src={RESTAURANT_IMG_COMMON_URL + imageId} />
        <h2 >{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price / 100}</h4>
      </div>
    );
  };

export default FoodItem;