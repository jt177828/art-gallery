import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Homepage from "./components/Homepage"
import Createpage from "./components/Createpage"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes> 
    </div>
  )
}
