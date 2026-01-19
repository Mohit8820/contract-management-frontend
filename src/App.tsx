import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import AllRoutes from "./AllRoutes";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <AllRoutes />
      </main>
    </Router>
  );
};

export default App;
