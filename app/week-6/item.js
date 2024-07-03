import React from 'react';

export default function Item({ item }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}
