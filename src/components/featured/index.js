import React from "react";
import Slider from "react-slick";
import Carousel from "./Carousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
