import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Career from "../components/main/Career";
import Article from "../components/main/Article";
import Vod from "../components/main/Vod";
import RecommendBtn from "../components/main/RecommendBtn";
import Event from "../components/main/Event";
import Subscribe from "../components/main/Subscribe";
import Footer from "../components/Footer";
import Infomation from "../components/main/Infomation";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Career />
      <Article />
      <Vod />
      <RecommendBtn />
      <Event />
      <Subscribe />
      <Infomation />
      <Footer />
    </div>
  );
};

export default MainPage;
