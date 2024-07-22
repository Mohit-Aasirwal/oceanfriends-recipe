import Image from "next/image";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const VerticalCard = () => {
  return (
    <div className="relative flex flex-col space-y-5 w-full z-30 rounded-xl">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-max">
        <Image
          src="https://s3-alpha-sig.figma.com/img/6d76/9d15/36bd89900daf1d31e299baba4eb26aa0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SwqjvzG5W-VGxBCoErBvGtUzhfsNprImvln3rhKA~DSnFNuKokIiy1rd1uZbhJC~WxSpSe9nicFaTcHoz6j6RQt0HimyHivCTLjtk8K0~KLCBDetGy0fkZAMInvNS6v1csqX3WG-SMu3NaxU--mZfeqGTiDT2vuIp6LLQyezsMgNC5IXuJIQTAemQkixontkp~~H4RQQEi9bbugDhxtc4ST~cSbX1QBPj~zyf8Xivy11ONhS8VjXaRc76zRM9NusfVYif~ZmAhGGU0A7wX4vJZA8iBsKYAwidpKTCJpq4pBrgmGXlVoDh2qXnSssoCkfjDAgjr44Dyx6BmKQ6glEqw__"
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
      <div className="flex flex-col space-y-5 justify-between items-center w-fit p-3 pt-20 h-56 container rounded-xl bg-[#D9D9D9]">
        <h1 className="font-semibold text-center w-3/4">Classic Greek Salad</h1>
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
