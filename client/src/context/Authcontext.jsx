import React, { FC, ReactNode, createContext, useContext, useState } from "react";


const INITIAL_USER = { username: "", userId: "" };



const Authcontext = createContext(undefined);


export const Usercontext = ({ children }) => {
  const [user, setUser] = useState<UserType>(INITIAL_USER);
  const [sessionId, setSessionId] = useState<string>("");

  const value = {
    user,
    sessionId,
    setUser,
    setSessionId,
  };

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};


export const useUserContext = () => useContext(Authcontext);