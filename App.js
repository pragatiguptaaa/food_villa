// These are being imported from node_modues now(We have Removed all CDN links).
import React from 'react';
import ReactDOM from 'react-dom/client';

const AppLayout = () =>{
    return(
            {
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
            }
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeader />);