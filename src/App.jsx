// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header.jsx";
import CVapp from "./components/cv.jsx";
import WorkHistory from "./components/workHistory.jsx";
import "./styles/index.css";

function App() {
  return (
    <div>
      <Header />
      <CVapp />
      <WorkHistory />
    </div>
  );
}

export default App;
