import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";

const HorizontalCard = (recipe: any) => {
  return (
    <div className="relative flex flex-col space-y-3 w-72 z-30 p-4 shadow-md rounded-xl">
      <div className="flex flex-col space-y-2">
        <h1 className="truncate font-semibold text-[#484848] w-2/3">
          {recipe.recipe.strMeal}
        </h1>
        <div className="flex flex-row space-x-1">
          <FaStar color="#FFAD30" size={10} />
          <FaStar color="#FFAD30" size={10} />
          <FaStar color="#FFAD30" size={10} />
          <FaStar color="#FFAD30" size={10} />
        </div>
      </div>
      <div className="absolute -top-10 right-2">
        <Image
          src={recipe.recipe.strMealThumb}
          alt="Classic Greek Salad"
          width={200}
          height={200}
          className="w-20 h-20 object-cover rounded-full "
        />
      </div>
      <div className="flex flex-row justify-between items-center space-y-2 text-sm">
        <div className="text-[#A9A9A9] flex flex-row justify-center items-center space-x-1">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/581a/7d11/67c1cc036aaf74ebd257b46d115c1af3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DytG2hIyqtkBrDBquvzwC2ZgbwVJ4fhIdhcl3YhjKybGsm1n6emetnw27nwXjJH16dngRLqGEaFFjCSu7QjrX2s52bWA5Es9b7teQ-gby8wYBX~YTZ33oixjhl3yeXoYquZjqK~YRazf8qynS0muAnBi4MVrQgXida1LBs8eUlIsBFLFV-OdrKTqf9zCBPbxVDO8h3zWX6W-8ge5MJG2-hbjLNvQg1FZGbxU0PWw7JGf~O0VQ3E~npMciG0F1YXpl8~99ftSicBwrdCVWDlwv5b4zEDy1c8yqYIK4Yi9h1MoCnOxAeSjuMHDWtxiluEgXIzRkc~VF5sGQ~gENPgGbQ__"
            }
            alt=""
            className="rounded-full w-8 h-8"
            width={1000}
            height={1000}
          />
          <h1>By James Milner</h1>
        </div>
        <div className="text-[#A9A9A9] font-medium flex flex-row space-x-1 justify-center items-center">
          <CiStopwatch size={18} />
          <span>20 min</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
