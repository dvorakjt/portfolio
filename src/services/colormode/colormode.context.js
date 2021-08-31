import React, { useState, createContext } from "react";

export const ColorModeContext = createContext();

export const ColorModeContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
