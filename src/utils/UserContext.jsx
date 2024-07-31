import { createContext } from "react";


// we can use this context anywhere in my app.
const UserContext = createContext({
    loggedInUser: "default user",
});

export default UserContext;