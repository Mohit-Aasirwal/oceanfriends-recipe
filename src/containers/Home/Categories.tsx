"use client";
import VerticalCard from "@/components/Card/VerticalCard";
import Slider from "@/components/Slider";
import React, { useState } from "react";

const categoryList = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "Chicken", slug: "chicken" },
  { id: 3, name: "Vegetarian", slug: "vegetarian" },
  { id: 4, name: "Dessert", slug: "dessert" },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-evenly items-center">
        {categoryList &&
          categoryList.map((value, id) => {
            return (
              <button
                key={id}
                className={`${
                  value.name === selectedCategory
                    ? "bg-[#129575]  rounded-xl text-white"
                    : "text-[#129575]"
                } px-4 py-2 text-sm cursor-pointer`}
                onClick={() => setSelectedCategory(value.name)}
              >
                {value.name}
              </button>
            );
          })}
      </div>
      <div className="overflow-x-scroll z-30">
        <Slider>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
