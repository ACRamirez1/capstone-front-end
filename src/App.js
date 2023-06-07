import { useState } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginPage";
import Quotes from "./components/Quotes";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

function App() {
  const [token, setToken] = useState("");
  const isLoggedIn = token !== "";
  return (
    <div className="App">
      {/* Navigation goes here */}
      <Box style={{ backgroundColor: "blue", height: 20, width: "100%" }}></Box>
      <BrowserRouter>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<LoginPage setToken={setToken} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Quotes token={token} />} />
            <Route path="/quotes" element={<Quotes token={token} />} />
            {/* Authenticated routes go here */}
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
