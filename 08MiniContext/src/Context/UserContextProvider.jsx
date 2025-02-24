/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
     <UserContext.Provider value={{ user, setUser }}>  {/* making them available to any component that consumes this context */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
