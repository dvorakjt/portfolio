import React from "react";
import { AnimationContextProvider } from "./services/animation/animation.context";
import { ColorModeContextProvider } from "./services/colormode/colormode.context";
import { HomeScreen } from "./features/home/screens/HomeScreen";
import "./App.css";

function App() {
  return (
    <ColorModeContextProvider>
      <AnimationContextProvider>
        <HomeScreen />
      </AnimationContextProvider>
    </ColorModeContextProvider>
  );
}

export default App;
