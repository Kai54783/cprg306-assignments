"use client"

import { useEffect, useState } from "react"



export default function MealIdeas( {ingredient} ) {
    const[meals, setMeals] = useState([]);
}

async function fetchMealIdeas(ingredient){
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
        return [];
    }
}

function loadMealIdeas() {
    fetchMealIdeas(ingredient).then((mealData) => {
        setMeals(mealData);
    });
}

useEffect(() => {
    if(ingredient) {
        loadMealIdeas();
    }
}, [ingredient]);

