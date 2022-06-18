import React from "react";
import Employ from "../pages/Employ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Job from "../pages/Job";

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/employ" exact element={<Employ />}></Route>
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/" exact element={<Job />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default index;
