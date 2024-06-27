import { GameMode } from "@/pages/game-mode";
import { GameStart } from "@/pages/game-start";
import { HomeScreen } from "@/pages/home-screen";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/game-mode" element={<GameMode />} />
          <Route path="/game-start" element={<GameStart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
