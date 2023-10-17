import React from 'react';
import items from './items.json';
import Item from './item';

export default function ItemList() {
    return (
        <div>
            {items.map(item => (
                <Item 
                    key={item.id} 
                    name={item.name} 
                    quantity={item.quantity} 
                    category={item.category} 
                />
            ))}
        </div>
    );
}
