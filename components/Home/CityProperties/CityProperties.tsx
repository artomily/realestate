import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import CitySlider from "./CitySlider";

const CityProperties = () => {
  return (
    <div id="listing" className="py-16 scroll-mt-20">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Explore City Properties" />
        <div className="mt-10 md:mt-16">
          <CitySlider />
        </div>
      </div>
    </div>
  );
};

export default CityProperties;
