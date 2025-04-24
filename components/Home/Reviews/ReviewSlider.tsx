"use client";
import { userReviewData } from "@/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
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

const ReviewSlider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      responsive={responsive}
      infinite
    >
      {userReviewData.map((review) => {
        return (
          <div key={review.id}>
            <ReviewCard review={review} />
          </div>
        )
      })}
    </Carousel>
  );
};

export default ReviewSlider;
