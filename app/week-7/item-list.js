import React from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-2">
      {items.sort((a, b) => a.name.localeCompare(b.name)).map(item => (
        <Item key={item.id} item={item} onSelect={() => onItemSelect(item)} />
      ))}
    </div>
  );
}
