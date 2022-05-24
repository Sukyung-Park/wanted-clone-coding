import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Position from "../components/Position";
import Pass from "../components/Pass";
import Profile from "../components/Profile";
import HomeCompany from "../components/HomeCompany";
import GrowthCompany from "../components/GrowthCompany";
import Now from "../components/Now";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Position />
      <Pass />
      <Profile />
      <HomeCompany />
      <GrowthCompany />
      <Now />
    </div>
  );
};

export default MainPage;
