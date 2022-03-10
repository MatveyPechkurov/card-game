import React from "react";
import GamePage from "./components/GamePage";
import { Route, Routes } from "react-router-dom";
import { InitialPage } from "./components/InitialPage";
import { ResultPage } from "./components/ResultPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </div>
  );
};
