"use client";
import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const categories = [
    "All",
    "Cereal",
    "Vegetables",
    "Dinner",
    "Local Dish",
    "Fruit",
    "Breakfast",
    "Chinese",
    "Lunch",
  ];
  const areas = [
    "All",
    "Indian",
    "French",
    "Italian",
    "Chinese",
    "Mexican",
    "Spanish",
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const toggleArea = (area: string) => {
    setSelectedArea(area === selectedArea ? null : area);
  };

  const handleFilter = () => {
    // Implement your filter logic here
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Area:", selectedArea);
    setFiltersOpen(false);
  };
  return (
    <div className="bg-[#129575] flex justify-center p-2 items-center w-10 h-10 rounded-xl">
      <VscSettings
        color="white"
        size={24}
        className=""
        onClick={() => setFiltersOpen(true)}
      />
      {filtersOpen && (
        <div className="absolute top-0 left-0 right-0 z-50 flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Filter Search</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1 text-sm rounded-xl ${
                    selectedCategory === category
                      ? "bg-[#129575] text-white"
                      : "bg-transparent border border-[#71B1A1] text-[#71B1A1]"
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Area</h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <button
                  key={area}
                  className={`px-3 py-1 rounded-xl text-sm ${
                    selectedArea === area
                      ? "bg-[#129575] text-white"
                      : "bg-transparent border border-[#71B1A1] text-[#71B1A1]"
                  }`}
                  onClick={() => toggleArea(area)}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <button
            className="px-10 text-sm py-2 bg-[#129575] text-white rounded-xl"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
