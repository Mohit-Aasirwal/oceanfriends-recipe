import HorizontalCard from "@/components/Card/HorizontalCard";
import Slider from "@/components/Slider";
import React from "react";

const NewRecipes = () => {
  return (
    <div>
      <h1 className="font-bold">New Recipes of your Area</h1>
      <div className="overflow-x-scroll z-50">
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
