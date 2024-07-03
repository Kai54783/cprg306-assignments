import React, { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      try {
        if (!ingredient) return;

        console.log(`Fetching meal ideas for: ${ingredient}`);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log('API response:', data);
        setMeals(data.meals || []);
      } catch (error) {
        console.error(`Error fetching meal ideas: ${error.message}`);
        setMeals([]);
      }
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found for "{ingredient}".</p>
      ) : (
        <ul className="space-y-2">
          {meals.map(meal => (
            <li key={meal.idMeal}>
              <p>{meal.strMeal}</p>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', height: '100px' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
