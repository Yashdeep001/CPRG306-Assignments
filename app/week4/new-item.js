"use client"
import {useState} from "react";
export default function NewItem(){
    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState("1");
    const [category,setCategory] = useState("Produce");
    const [eventCreated, setEventCreated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newEvent = {
            name,
            quantity,
            category
        };
        console.log(newEvent);
        setEventCreated(true);
        setName("");
        setQuantity("1");
        setCategory("Produce")
        setEventCreated(false);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <main>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Item Name:</span>
                    <input required onChange={handleNameChange} value={name} className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" />
                </label>
                <label>
                    <span>Quanity:</span>
                <input required onChange={handleQuantityChange} value={quantity} type="number" id="quantity"  min="1" max="99" className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" />
                </label>
                <label>
                    <span>Category:</span>
                    <select required onChange={handleCategoryChange} value={category} className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" >
                    <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            </select>
                </label>
            <button
             type="submit"
             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
          +
        </button>
            </form>
            </div>
        </main>
    )
}