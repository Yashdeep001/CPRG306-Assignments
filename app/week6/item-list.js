import React, { useState } from 'react';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;  
    });
    return (
        <div className="bg-black-500 min-h-screen text-white font-sans">
            <div className="mb-4 p-4">
                <button
                    className={`mr-5 px-3 py-2 text-xl rounded ${
                        sortBy === 'name' ? 'bg-blue-500' : 'bg-blue-500'
                    }`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-3 py-2 text-xl rounded ${
                        sortBy === 'category' ? 'bg-blue-500' : 'bg-blue-500'
                    }`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map((item, index) => (
                    <li key={index} className="m-4 p-1 border rounded shadow-md bg-gray-800 text-lg">
                        <strong className="block mb-1">{item.name}</strong>
                        <span className="block mb-1">{item.quantity} {item.quantity > 1 ? 'items' : 'item'}</span>
                        <span>Category: {item.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
