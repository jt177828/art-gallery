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
                }, body: JSON.stringify(newItem),
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
        <div className="text-center flex-col">
            <h1 className="text-4xl font-bold mb-4">Upload Art</h1>
            <button onClick={() => navigate("/")}>Back</button>

            <input type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}/>

            <input placeholder="Year"
            value={newItem.year}
            onChange={(e) => setNewItem({ ...newItem, year: e.target.value })}/>

            <input placeholder="Image URL"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}/>

            <button onClick={ submitItem }>Submit</button>
        </div>
  )
}