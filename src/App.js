import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Quotes from "./components/Quotes";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Articles from "./components/Articles";
import RoleOfAFather from "./components/RoleOfAFather";
import Subscribe from "./components/Subscribe";
import Connect from "./components/Connect";


function App() {
  const [token, setToken] = useState("");
  const isLoggedIn = token !== "";
  return (
    <div className="App">
      <BrowserRouter>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<LoginPage setToken={setToken} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Quotes token={token} />} />
            {/* <Route path="/quotes" element={<Quotes />} /> */}
            {/* Authenticated routes go here */}
            <Route path='/articles' element={<Articles token={token} />} />
            <Route path='/roleofafather' element={<RoleOfAFather token={token} />} />
            <Route path='/subscribe' element={<Subscribe token={token} />} />
            <Route path='/connect' element={<Connect token={token} />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
