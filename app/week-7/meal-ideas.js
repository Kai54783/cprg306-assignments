"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [mealDisplay, setMealDisplay] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.meals) {
                return data.meals;
            } else {
                return [{ strMeal: `No meal ideas found for ${ingredient}`, idMeal: "98032" }];
            }
        } catch (error) {
            console.log(error.message);
    
        }
    }

    async function getMealById(mealId) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            return data.meals[0];
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        if (ingredient) {
            (async () => {
                const mealIdeas = await fetchMealIdeas(ingredient);
                setMeals(mealIdeas);
            })();
        }
    }, [ingredient]);

    useEffect(() => {
        (async () => {
            if (meals.length > 0) {
                let thisMealDisplay = [];
                for (let i = 0; i < meals.length; i++) {
                    let thisMeal = await getMealById(meals[i].idMeal);
                    thisMealDisplay.push(thisMeal);
                }
                setMealDisplay(thisMealDisplay);
            }
        })();
    }, [meals]);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
            <ul className="space-y-4">
            {meals.map((meal) => (
                <li key={meal.idMeal} className="p-4 bg-gray-100 rounded-lg shadow-md flex items-center space-x-4">
                    {meal.strMeal}    
                </li>
            ))}
            </ul>
        </div>
    );
}
