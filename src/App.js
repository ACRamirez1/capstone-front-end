import { useState } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Router from "./ApplicationRouter";
import "./App.css";
import Login from "./components/Login";
import Quotes from "./components/Quotes";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      
      <Login setToken={setToken} />
      <Quotes token={token} />

      

      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
