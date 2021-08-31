import React, { useState, createContext } from "react";

export const AnimationContext = createContext();

export const AnimationContextProvider = ({ children }) => {
  const [animationStage, setAnimationStage] = useState(0);

  return (
    <AnimationContext.Provider value={{ animationStage, setAnimationStage }}>
      {children}
    </AnimationContext.Provider>
  );
};
