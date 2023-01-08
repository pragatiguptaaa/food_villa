// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';
//Default Import
import Header from './components/Header.js';
import Body from './components/Body';
//Named import
import {Footer} from './components/Footer';

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

const FoodVillaAppLayout = () => {
    return(
           <>
                <Header/>  
                <Body/>
                <Footer/> 
            </>
         
          );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodVillaAppLayout />);