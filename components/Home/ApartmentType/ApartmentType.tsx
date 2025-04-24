import SectionHeading from "@/components/Helper/SectionHeading";
import { apartmentTypeData } from "@/data/data";
import React from "react";
import AppartmentCard from "./AppartmentCard";

const ApartmentType = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Apartment Types" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center">
          {apartmentTypeData.map((type, i) => {
            return (
              <div
                key={type.id}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                data-aos-anchor-placement="top-center"
              >
                <AppartmentCard type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApartmentType;
