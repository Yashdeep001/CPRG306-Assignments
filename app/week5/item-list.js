"use client"
import React, { useState } from 'react';
import Item from './item'; 
import itemsData from './items.json'; 
const ItemList = () => {
const [sortBy, setSortBy] = useState('name');
const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });
return (
    <div>
      <div className="mb-3">
        <button
          className={`mr-3 px-3 py-2 rounded ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`px-3 py-2 rounded ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};
export default ItemList;