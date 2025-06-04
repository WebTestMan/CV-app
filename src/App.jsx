// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header.jsx";
import CVapp from "./components/cv.jsx";
import WorkHistory from "./components/workHistory.jsx";
import "./styles/index.css";
import "./styles/mobile.css";

function App() {
  return (
    <div className="pageLayout">
      <div className="header">
        <Header />
      </div>

      <div className="sidebar">
        <CVapp />
      </div>

      <div className="mainContent">
        <WorkHistory />
      </div>
    </div>
  );
}

export default App;
