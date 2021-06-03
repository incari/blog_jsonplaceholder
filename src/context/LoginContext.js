import React, { useState } from "react";

const Context = React.createContext({});

export function LoginContext({ children }) {
  const initialLogin = JSON.parse(localStorage.getItem("login")) || {}
  const [login, setLogin] = useState(initialLogin);

  const setLoginLocal =(data)=>{
    localStorage.setItem("login", JSON.stringify(data))
    setLogin(data)
  }

  return (
    <Context.Provider value={{ login, setLoginLocal }}>{children}</Context.Provider>
  );
}

export default Context;
