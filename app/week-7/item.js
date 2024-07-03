import React from 'react';

export default function Item({ item, onSelect }) {
  return (
    <div
      className="border p-4 rounded shadow-sm cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      onClick={() => onSelect(item)}
    >
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}
