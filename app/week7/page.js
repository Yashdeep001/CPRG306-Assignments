"use client";
import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.trim().toLowerCase();
        setSelectedItemName(cleanedName);
    };

    return (
        <main>
            <h1 className="font-bold">My shopping list</h1>  {/* added the "font-bold" class */}
            <div className="flex">
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div>
                    <h2 className="font-bold">Meal Ideas</h2>  {/* added the "font-bold" class */}
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
