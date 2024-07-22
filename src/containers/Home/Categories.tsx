"use client";
import VerticalCard from "@/components/Card/VerticalCard";
import Slider from "@/components/Slider";
import React, { useState, useEffect } from "react";

const categoryList = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "Chicken", slug: "chicken" },
  { id: 3, name: "Seafood", slug: "seafood" },
  { id: 4, name: "Dessert", slug: "dessert" },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (selectedCategory === "All") {
        // For "All" category, you might want to fetch a mix of recipes or use a different API endpoint
        setRecipes([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (e) {
        setError("Failed to fetch recipes");
        console.error("Error fetching recipes:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-row justify-evenly items-center">
        {categoryList.map((value) => (
          <button
            key={value.id}
            className={`${
              value.name === selectedCategory
                ? "bg-[#129575] rounded-xl text-white"
                : "text-[#129575]"
            } px-4 py-2 text-sm cursor-pointer`}
            onClick={() => setSelectedCategory(value.name)}
          >
            {value.name}
          </button>
        ))}
      </div>
      <div className="overflow-x-scroll z-30">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <Slider>
            {recipes.map((recipe) => (
              <VerticalCard key={recipe} recipe={recipe} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Categories;
