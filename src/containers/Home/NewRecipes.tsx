import HorizontalCard from "@/components/Card/HorizontalCard";
import Slider from "@/components/Slider";
import React from "react";

const NewRecipes = () => {
  return (
    <div className="scrollbar-hide">
      <h1 className="font-bold">New Recipes of your Area</h1>
      <div className="overflow-x-scroll z-50 scrollbar-custom">
        <Slider>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </Slider>
      </div>
    </div>
  );
};

export default NewRecipes;
