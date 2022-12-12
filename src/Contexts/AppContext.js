import React, { createContext, useState } from "react";

export const AppContext = createContext({
  height: null,
  winHeight: null,
  winWidth: null,
});

export const AppProvider = ({ children }) => {
  const [appContext, setAppContext] = useState({
    height: null,
    winHeight: null,
    winWidth: null,
  });

  const setContext = (data) => {
    setAppContext({ ...appContext, ...data });
  };

  return (
    <AppContext.Provider value={{ appContext, setContext }}>
      {children}
    </AppContext.Provider>
  );
};
