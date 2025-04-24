"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

type Props = {
  build: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const BuildingFeatureCard = ({ build }: Props) => {
  return (
    <Tilt className="rounded-lg shadow-md p-4 bg-white">
      <div className="w-16 h-16 ml-auto flex flex-col items-center justify-center bg-gray-100 rounded-full">
        <Image src={build.image} alt={build.title} width={40} height={40} />
      </div>
          <div className="p-2">
              <p className="mt-6 text-green-600 font-bold text-xl">{build.id}</p>
              <p className="text-lg text-gray-700 mt-2 mb-2 font-bold">{build.title}</p>
              <p className="text-sm opacity-70 text-gray-700">{build.description}</p>
      </div>
    </Tilt>
  );
};

export default BuildingFeatureCard;
