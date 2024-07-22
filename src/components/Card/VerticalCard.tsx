import Image from "next/image";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const VerticalCard = (recipe: any) => {
  return (
    <div className="relative flex flex-col space-y-5 w-48 h-56 z-30 rounded-xl">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-max">
        <Image
          src={recipe.recipe.strMealThumb}
          alt="Classic Greek Salad"
          width={200}
          height={200}
          className="w-32 h-fit object-cover rounded-full"
        />
        <div className="absolute top-1/3 -translate-y-1/2 -right-8 bg-[#FFE1B3] rounded-full px-2 py-1 text-sm flex">
          <FaStar color="#FFAD30" />
          <span>4.5</span>
        </div>
      </div>
      <div className="flex flex-col space-y-5 justify-between items-center w-full p-3 pt-20 h-56 container rounded-xl bg-[#D9D9D9]">
        <h1 className="font-semibold text-center w-3/4 truncate">
          {recipe.recipe.strMeal}
        </h1>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col space-y-2 text-sm">
            <h1 className="text-[#A9A9A9]">Time</h1>
            <h1 className="text-[#484848] font-medium">30 min</h1>
          </div>
          <div className="p-2 bg-white rounded-full">
            <BsBookmarkDash size={16} color="#71B1A1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
