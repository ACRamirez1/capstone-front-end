import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Quotes from "./components/Quotes";

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
};

export default ApplicationRouter;
