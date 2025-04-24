import SectionHeading from "@/components/Helper/SectionHeading";
import { properties } from "@/data/data";
import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div id="property" className="py-16 bg-gray-100 scroll-mt-20">
      <div className="w-[80%] mx-auto">
              <SectionHeading heading="Discover our properties" />
              <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                  {properties.map((property, i) => {
                      return (
                        <div
                          key={property.id}
                          data-aos="fade-up"
                          data-aos-delay={i * 100}
                          data-aos-anchor-placement="top-center"
                        >
                          <PropertyCard property={property} />
                        </div>
                      );
                  })}
              </div>
      </div>
    </div>
  );
};

export default Properties;
