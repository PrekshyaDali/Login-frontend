import React, { useState , useEffect} from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Card from "./components/UI/Card";


const App = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 const localstorageItem = localStorage.getItem('isAuthenticated') 
 console.log(localstorageItem)
 useEffect(()=>{
  if(localstorageItem){
    setIsAuthenticated(true);
  }
  else{
    setIsAuthenticated(false);
  }

 },[]);


  return (
    <>
    {
      isAuthenticated ? <Dashboard setIsAuthenticated = {setIsAuthenticated}> </Dashboard>:
  
      <Card  setIsAuthenticated = {setIsAuthenticated} ></Card>
    }
    </>
  );
};

export default App;
