import React from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    return (
        <div className="bg-black-500 min-h-screen text-white font-sans">
            <div className="mb-4 p-4">
                <button
                    className="mr-5 px-3 py-2 text-xl rounded bg-blue-500"
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className="px-3 py-2 text-xl rounded bg-blue-500"
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="m-4 p-1 border rounded shadow-md bg-gray-800 text-lg">
                        <Item {...item} onSelect={onItemSelect} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
