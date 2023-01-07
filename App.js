// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';


/**
    -Header
        -Logo
        -Nav bar items
    -Body
        -Search Bar
        -Restaurant list
             -Restaurant Card
                -Image
                -Name
                -Rating
                -Cusines
        -Footer
            -Copyright
            -Other important links 
**/ 
const TitleComponent = () =>{
    return (
        <img className="logo" alt ="Food Villa Logo"
             src ="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
    );
};

const HeaderComponent = () =>{
    return(
        <div className='header'>
            <TitleComponent />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const restaurantList =
    [{"type":"restaurant","data":{"type":"F","id":"315774","name":"Leon's - Burgers & Wings (Leon Grill)","uuid":"fee2e9c7-478c-4ee7-ac2b-941df753f007","city":"1","area":"Bellandur","totalRatingsString":"1000+ ratings","cloudinaryImageId":"abndbuj20yibpkkg1zzk","cuisines":["American","Snacks","Turkish","Portuguese","Continental"],"tags":[],"costForTwo":30000,"costForTwoString":"₹300 FOR TWO","deliveryTime":31,"minDeliveryTime":31,"maxDeliveryTime":31,"slaString":"31 MINS","lastMileTravel":4,"slugs":{"restaurant":"leon-grill-whitefield-whitefield-2","city":"bangalore"},"cityState":"1","address":"Central Mall, 13, varadhani complex,Opp Bangalore, Marathahalli - Sarjapur Outer Ring Rd, Bellandur,, Bangalore - 560103","locality":"Sarjapur Main Road","parentId":371281,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"50% off","shortDescriptionList":[{"meta":"50% off | Use WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 | Use code WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"50% OFF","shortDescriptionList":[{"meta":"Use WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 | Use code WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"ribbon":[{"type":"PROMOTED"}],"chain":[],"feeDetails":{"fees":[],"totalFees":0,"message":"","title":"","amount":"","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"cid=5697112~p=1~eid=00000185-8d40-dcdd-13a1-b643000c0116","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"4 kms","hasSurge":false,"sla":{"restaurantId":"315774","deliveryTime":31,"minDeliveryTime":31,"maxDeliveryTime":31,"lastMileTravel":4,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":true,"avgRating":"4.3","totalRatings":1000,"new":false},"subtype":"basic"},
    {"type":"restaurant","data":{"type":"F","id":"363","name":"Meghana Foods","uuid":"b98bbbc7-7ca4-4aa9-867a-eb862a01efde","city":"1","area":"Marathahalli","totalRatingsString":"5000+ ratings","cloudinaryImageId":"yfyo8aklppbwdplv7ofp","cuisines":["Biryani","Andhra","South Indian","North Indian","Chinese","Seafood"],"tags":[],"costForTwo":50000,"costForTwoString":"₹500 FOR TWO","deliveryTime":23,"minDeliveryTime":23,"maxDeliveryTime":23,"slaString":"23 MINS","lastMileTravel":1.7999999523162842,"slugs":{"restaurant":"meghana-foods-outer-ring-road-marathahalli","city":"bangalore"},"cityState":"1","address":"Above Sony Centre, Opposite Park Plaza, Outer Ring Road, Marathahalli","locality":"Outer Ring Road","parentId":635,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"50% off","shortDescriptionList":[{"meta":"50% off | Use WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 | Use code WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"50% OFF","shortDescriptionList":[{"meta":"Use WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"50% off up to ₹100 | Use code WELCOME50","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[],"totalFees":0,"message":"","title":"","amount":"","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"1.7 kms","hasSurge":false,"sla":{"restaurantId":"363","deliveryTime":23,"minDeliveryTime":23,"maxDeliveryTime":23,"lastMileTravel":1.7999999523162842,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"4.2","totalRatings":5000,"new":false},"subtype":"basic"},
    {"type":"restaurant","data":{"type":"F","id":"12394","name":"Byg Brewski Brewing Company","uuid":"4e4319a4-d11f-45a7-8bf0-9d5d91e709f2","city":"1","area":"Sarjapur Road","totalRatingsString":"1000+ ratings","cloudinaryImageId":"koqni7wykoybxibmsddx","cuisines":["South Indian","North Indian","Asian","Continental","Pizzas","Burgers","Pastas","Desserts"],"tags":[],"costForTwo":85000,"costForTwoString":"₹850 FOR TWO","deliveryTime":40,"minDeliveryTime":40,"maxDeliveryTime":40,"slaString":"40 MINS","lastMileTravel":5.800000190734863,"slugs":{"restaurant":"big-brewsky-bellandursarjapur","city":"bangalore"},"cityState":"1","address":"10 2A  Big Brewsky  Kaikondrahalli  Sarjapur road  Behind MK Retail  Bangalore  Karnataka 560035","locality":"Kaikondrahalli","parentId":7382,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"20% off","shortDescriptionList":[{"meta":"20% off | Use PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"20% off | Use code PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"20% OFF","shortDescriptionList":[{"meta":"Use PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"20% off | Use code PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"ribbon":[{"type":"PROMOTED"}],"chain":[],"feeDetails":{"fees":[],"totalFees":0,"message":"","title":"","amount":"","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"cid=5629869~p=4~eid=00000185-8d40-dcdd-13a1-b644000c045e","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"5.8 kms","hasSurge":false,"sla":{"restaurantId":"12394","deliveryTime":40,"minDeliveryTime":40,"maxDeliveryTime":40,"lastMileTravel":5.800000190734863,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":true,"avgRating":"4.2","totalRatings":1000,"new":false},"subtype":"basic"},
    {"type":"restaurant","data":{"type":"F","id":"261261","name":"Hotel Empire","uuid":"1737faa1-3303-4f10-9111-74193f23c459","city":"1","area":"Sarjapur Road","totalRatingsString":"1000+ ratings","cloudinaryImageId":"ue1tt2ujt2ybghd60bs0","cuisines":["North Indian","Kebabs","Biryani"],"tags":[],"costForTwo":45000,"costForTwoString":"₹450 FOR TWO","deliveryTime":37,"minDeliveryTime":37,"maxDeliveryTime":37,"slaString":"37 MINS","lastMileTravel":5,"slugs":{"restaurant":"hotel-empire-bellandur-sarjapur-bellandur-sarjapur","city":"bangalore"},"cityState":"1","address":"Countryside Layout, Rainbow Drive, Bengaluru, Karnataka 560035","locality":"Countryside Layout","parentId":475,"unserviceable":false,"veg":false,"select":false,"favorite":false,"tradeCampaignHeaders":[],"aggregatedDiscountInfo":{"header":"10% off","shortDescriptionList":[{"meta":"10% off | Use PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"10% off | Use code PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"aggregatedDiscountInfoV2":{"header":"10% OFF","shortDescriptionList":[{"meta":"Use PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"descriptionList":[{"meta":"10% off | Use code PARTY","discountType":"Percentage","operationType":"RESTAURANT"}],"subHeader":"","headerType":0,"superFreedel":""},"chain":[],"feeDetails":{"fees":[],"totalFees":0,"message":"","title":"","amount":"","icon":""},"availability":{"opened":true,"nextOpenMessage":"","nextCloseMessage":""},"longDistanceEnabled":0,"rainMode":"NONE","thirdPartyAddress":false,"thirdPartyVendor":"","adTrackingID":"","badges":{"imageBased":[],"textBased":[],"textExtendedBadges":[]},"lastMileTravelString":"5 kms","hasSurge":false,"sla":{"restaurantId":"261261","deliveryTime":37,"minDeliveryTime":37,"maxDeliveryTime":37,"lastMileTravel":5,"lastMileDistance":0,"serviceability":"SERVICEABLE","rainMode":"NONE","longDistance":"NOT_LONG_DISTANCE","preferentialService":false,"iconType":"EMPTY"},"promoted":false,"avgRating":"4.1","totalRatings":1000,"new":false},"subtype":"basic"}];


const RestaurantCard = (props) =>{
    return (
        <div className="restaurantCard">
            <img alt ="Burger king image"
                src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId} ></img>
            <h2> {props.restaurant.data?.name} </h2>
            <h3 style ={{wordWrap:'break-word'}}> {props.restaurant.data?.cuisines.join(",")} </h3>
            <h4> {props.restaurant.data?.avgRating} stars </h4>
        </div>
    );
};

const Body = () =>{
    return (
    <div className="restaurant-list">
        <RestaurantCard restaurant = {restaurantList[0]}/>
        <RestaurantCard restaurant = {restaurantList[1]}/>
        <RestaurantCard restaurant = {restaurantList[2]}/>
    </div>);
};

const Footer = () =>{
    return (<h4> Footer </h4>);
};

const FoodVillaAppLayout = () => {
    return(
           <>
                <HeaderComponent/>  
                <Body/>
                <Footer/> 
            </>
         
          );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodVillaAppLayout />);