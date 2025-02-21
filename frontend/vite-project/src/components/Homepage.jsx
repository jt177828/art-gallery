import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function Homepage() {
    const navigate = useNavigate();

    const [items, setItems] = useState();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/items");
                if (!res.ok) {
                    throw new Error("Failed to fetch items");
                }
                const data = await res.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Art Gallery</h1>
            <button onClick={() => navigate("/create")}>Submit</button>
        </div>
  )
}

