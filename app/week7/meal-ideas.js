"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient){
    const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}'
      );
      const data = await response.json();
      return data;
}

export default function MealIdea({ingredient}){
    const [mealIdea, setMealIdea] = useState([]);

    async function loadMeals() {
        try{
            const data = await fetchMealIdea(ingredient);
            setMealIdea(data);
        } catch (error) {
            console.log(error);
        }
    }

   useEffect(() => {
        loadMeals();
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-4xl font-bold m-6 text-green-600">Meal Idea</h1>
            <ul>
                {mealIdea.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
        );
}


