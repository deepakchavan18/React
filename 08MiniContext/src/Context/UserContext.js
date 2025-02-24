import React from "react";

const UserContext = React.createContext(); //Global Container

export default UserContext;

// React.createContext() is used to create a context object. In this case, 
// UserContext is being created. Context allows for sharing state (data) across 
// multiple components without having to pass props manually through each level of 
// the component tree.

//UserContext will serve as a global container where the state (user information) 
// can be stored and accessed by any component wrapped within the context.

{
  /* <UserContext>
    <Login/>
    <Card>
        <Data/>
    <Card/>
</UserContext> */
}
