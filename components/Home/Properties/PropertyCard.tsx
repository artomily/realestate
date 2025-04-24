import React from "react";
import Image from "next/image";
import { MdElectricBolt } from "react-icons/md";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";

type Props = {
  property: {
    id: number;
    propertyName: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    imageUrl: string;
  };
};

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg">
      <div className="relative">
        <Image
          src={property.imageUrl}
          alt={property.propertyName}
          width={300}
          height={300}
          className="w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
        <h1 className="px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black w-fit rounded-lg text-white">
          <span className="text-base font-bold">${property.price}</span> / mo
        </h1>
        <div className="flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-green-500 w-fit rounded-md text-white font-bold">
          <MdElectricBolt />
          <span>Featured</span>
        </div>
      </div>
      <div className="p-5">
        <h1 className="mt-4 group-hover:underline text-gray-900 font-bold text-lg">
          {property.propertyName}
        </h1>
        <p className="text-gray-500 text-sm mt-2">{property.location}</p>
        <div className="flex items-center mt-6 justify-between w-full lg:w-[80%]">
          <div className="flex items-center space-x-2">
            <FaBed className="text-green-500" />
            <p className="text-gray-500 text-sm">{property.bedrooms} Beds</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaBath className="text-green-500" />
            <p className="text-gray-500 text-sm">{property.bathrooms} Bath</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaSquare className="text-green-500" />
            <p className="text-gray-500 text-sm">
              {property.size} m<sup>2</sup>
            </p>
          </div>
              </div>
              <div className="w-full h-[1.2px] mt-4 mb-4 bg-gray-500 opacity-15"></div>
              <div className="flex items-center justify-between">
                  <h1 className="text-sm text-gray-600">For Rent</h1>
                  <div className="flex items-center space-x-2 text-gray-500">
                      <BiLinkExternal />
                      <BsPlusSquare />
                      <BsHeart />
                  </div>
              </div>
      </div>
    </div>
  );
};

export default PropertyCard;
