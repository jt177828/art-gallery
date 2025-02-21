import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

export default function Createpage() {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Upload Art</h1>
            <button onClick={() => navigate("/")}>Back</button>
        </div>
  )
}