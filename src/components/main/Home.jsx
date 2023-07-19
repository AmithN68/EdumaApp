import React from "react";
import CarouselPage from "./CarouselPage";
import Division from "./Division";
import FixedBar from "./FixedBar";
import PopularCourses from "./PopularCourses";
import RegisterNow from "./RegisterNow";
import Choice from "../main/choice/Choice";
import Events from "../main/event/Event";
import Footer from "../main/footer/Footer";
import Suggest from "./Suggest/WhatPeopleSay";
import Subscribe from "./subscribe/Subscribe";
import Navbar1 from "../Navbar/Navbar1";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar />
      <CarouselPage />
      <FixedBar />
      <Division />
      <PopularCourses />
      <RegisterNow />
      <Choice />
      <Events />
      <Suggest />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
