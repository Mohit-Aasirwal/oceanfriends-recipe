import HorizontalCard from "@/components/Card/HorizontalCard";
import Loader from "@/components/Loader";
import Slider from "@/components/Slider";
import React, { useEffect, useState } from "react";

const NewRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="scrollbar-hide">
      <h1 className="font-bold">New Recipes of your Area</h1>
      <div className="overflow-x-scroll z-50 scrollbar-custom">
        <Slider>
          {recipes.map((recipe) => (
            <HorizontalCard key={recipe} recipe={recipe} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewRecipes;
