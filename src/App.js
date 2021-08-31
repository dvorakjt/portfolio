import React from "react";
import { AnimationContextProvider } from "./services/animation/animation.context";
import { HomeScreen } from "./features/home/screens/HomeScreen";
import "./App.css";

function App() {
  return (
    <div>
      <AnimationContextProvider>
        <HomeScreen />
      </AnimationContextProvider>
    </div>
  );
}

export default App;
