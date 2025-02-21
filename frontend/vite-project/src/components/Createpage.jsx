import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Createpage() {
    const navigate = useNavigate();
    const [newItem, setNewItem] = useState({
        name: "",
        year: "",
        image: "",
    });

    const submitItem = async () => {
        try {
            const res = await fetch("/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify(newItem),
            });

            if (!res.ok) {
                throw new Error("Failed to upload item");
            }
            const result = await res.json();
            console.log("Success:", result);
            navigate("/");
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Upload Art</h1>
            <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <button 
                    onClick={() => navigate("/")}
                    className="mb-6 text-blue-400 hover:text-blue-300 transition duration-300"
                >
                    &larr; Back to Gallery
                </button>

                <div className="space-y-4">
                    <input 
                        type="text"
                        placeholder="Name"
                        value={newItem.name}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input 
                        type="text"
                        placeholder="Year"
                        value={newItem.year}
                        onChange={(e) => setNewItem({ ...newItem, year: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input 
                        type="text"
                        placeholder="Image URL"
                        value={newItem.image}
                        onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button 
                        onClick={submitItem}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}