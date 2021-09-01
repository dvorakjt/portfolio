import React from "react";
import { AnimationContextProvider } from "./services/animation/animation.context";
import { ColorModeContextProvider } from "./services/colormode/colormode.context";
import { HomeScreen } from "./features/home/screens/HomeScreen";
import { AboutScreen } from "./features/about/screens/AboutScreen";
import { ColorToggler } from "./components/ColorToggler";
import "./App.css";

function App() {
  return (
    <ColorModeContextProvider>
      <AnimationContextProvider>
        <HomeScreen />
        <AboutScreen />
        <ColorToggler />
      </AnimationContextProvider>
    </ColorModeContextProvider>
  );
}

export default App;
