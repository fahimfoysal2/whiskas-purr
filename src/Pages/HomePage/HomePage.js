import React from "react";
import MainFooter from "../../Common/Footer/MainFooter";
import MainHeader from "../../Common/Header/MainHeader";
import Hero from "../../Components/Hero/Hero";
import MusicPlayer from "../../Components/MusicPlayer/MusicPlayer";
import WhiskasContest from "../../Components/whiskasContest/WhiskasContest";

const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <Hero />
      <MusicPlayer />
      <WhiskasContest />
      <MainFooter />
    </div>
  );
};

export default HomePage;
