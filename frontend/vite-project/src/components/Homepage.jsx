import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

export default function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Art Gallery</h1>
            <button onClick={() => navigate("/create")}>Submit</button>
        </div>
  )
}

