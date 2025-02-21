import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import  Itemcard from "./Itemcard";

export default function Homepage() {
    const navigate = useNavigate();
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch("/api/items");
                const data = await res.json();
                setItems(data.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        }
        fetchItems();
    }, []);

    console.log("Component rendering, items:", items);
            
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Art Gallery</h1>
            <button onClick={() => navigate("/create")}>Submit</button>

            <div className="grid">
                {items && items.map((item) => (
                    <Itemcard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}