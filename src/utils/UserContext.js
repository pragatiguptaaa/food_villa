import React from "react";
import { createContext } from "react";

const UserContext = createContext(
    {
        user:{
                name: "Pragati",
                email: "Pragati@gmail.com"
             },
        admin:{
            name: "Admin"
        }
    }
);

export default UserContext;