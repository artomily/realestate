import SectionHeading from "@/components/Helper/SectionHeading";
import { buildings } from "@/data/data";
import React from "react";
import BuildingFeatureCard from "./BuildingFeatureCard";

const BuildingFeature = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Building Features" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
          {buildings.map((build) => {
            return (
              <div key={build.id}>
                <BuildingFeatureCard build={build} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BuildingFeature;
