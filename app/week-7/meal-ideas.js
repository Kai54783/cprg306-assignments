"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [mealDisplay, setMealDisplay] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return [];
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
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {mealDisplay.map(meal => (
                    <li key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
