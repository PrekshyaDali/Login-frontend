import React, { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Card from "./components/UI/Card";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
    {
      isAuthenticated ? <Dashboard setIsAuthenticated = {setIsAuthenticated}></Dashboard>:
  
      <Card   setIsAuthenticated = {setIsAuthenticated}></Card>
    }
    </>
  );
};

export default App;
