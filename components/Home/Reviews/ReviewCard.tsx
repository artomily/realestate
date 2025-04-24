import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import Image from "next/image";

type Props = {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ReviewCard = ({ review }: Props) => (
  <div className="bg-white rounded-lg m-3 p-6 relative">
    <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-green-600 opacity-20" />
    <div className="mt-6 flex items-center">
      <FaStar className="w-4 h-4 text-yellow-400" />
      <FaStar className="w-4 h-4 text-yellow-400" />
      <FaStar className="w-4 h-4 text-yellow-400" />
      <FaStar className="w-4 h-4 text-yellow-400" />
      <FaStar className="w-4 h-4 text-yellow-400" />
    </div>
    <p className="mt-6 text-gray-600 font-medium">{review.review}</p>
    <div className="w-full h-[1.2px] bg-gray-600 opacity-10 my-6"></div>
    <div className="flex items-center space-x-4">
      <Image
        src={review.userImage}
        alt={review.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
        <h1 className="font-bold text-gray-800">{review.name}</h1>
        <p className="text-sm text-gray-500">{review.profession}</p>
      </div>
    </div>
  </div>
);

export default ReviewCard;
