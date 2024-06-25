"use client";
import React, { useState } from 'react';
import Item from './item';
import items from './item.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded-md focus:outline-none ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Sort by Name
        </button>
        <button 
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded-md focus:outline-none ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="divide-y divide-gray-200">
        {sortedItems.map(item => (
          <li key={item.id} className="py-4">
            <Item
              key={item.id} 
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              className="px-4 py-2 rounded-md shadow-sm bg-white hover:bg-gray-100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
