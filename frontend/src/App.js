import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./styles/main.css";  

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
