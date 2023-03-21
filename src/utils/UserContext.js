import { createContext } from "react";

const UserContext = createContext(
    {
        user:{
                name: "Pragati",
                email: "Pragati@gmail.com"
             }
    }
);

export default UserContext;