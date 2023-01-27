export function filterData(searchText, allRestaurants)
 {
     const filteredData = allRestaurants.filter((restaurant)=>
     {  
        return  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
     });
     return filteredData;
 }