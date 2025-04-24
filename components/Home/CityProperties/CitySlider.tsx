"use client";
import { cities } from "@/data/data";
import React from "react";
import CityCard from "./CityCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slideToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slideToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slideToSlide: 1,
  },
};

const CitySlider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      responsive={responsive}
      infinite
    >
        {cities.map((city) => {
          return (
            <div key={city.id}>
              <CityCard city={city}/>
            </div>
          );
        })}
    </Carousel>
  );
};

export default CitySlider;
