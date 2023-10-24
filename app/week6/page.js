"use client";
import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json'; 

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
      
        setItems(prevItems => [...prevItems, newItem]);
    };
    return (
        <main>
            <h1>My shopping list</h1>
            
            <NewItem onAddItem={handleAddItem} />
            
            <ItemList items={items} />
        </main>
    );
}
