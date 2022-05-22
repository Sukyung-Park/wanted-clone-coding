import React from "react";
import MainPage from "../pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default index;
