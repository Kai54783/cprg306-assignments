"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");


const handleSubmit = (e) => {
    e.preventDefault();

    const item = {name, quantity, category};
    console.log(item);
    alert(`Item added: \nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity('1');
    setCategory('Produce');
};

return (
    <form onSubmit={handleSubmit} className="bg-zinc-50 p-8 rounded-lg shadow-md max-w-md w-full space-y-6 ">
        

        <div>
            <label className="block text-xl font-bold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 sm:text-sm"   
                 />
        </div>

        <div>
            <label className="block text-xl font-bold text-gray-700 mb-1">Quantity</label>
            <input 
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}  
              min="1"
              max="99"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 sm:text-sm"      
            />
        </div>

        <div>
            <label className="block text-xl font-bold text-gray-700 mb-1">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 sm:text-sm"              
            
            >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <div>
            <button type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                +
            </button>
        </div>
    </form>
  );
}