"use client"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Itemcard from "./Itemcard"

export default function Homepage() {
  const navigate = useNavigate()
  const [items, setItems] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/items")
        const data = await res.json()
        setItems(data.data)
      } catch (error) {
        console.error("Error fetching items:", error)
      }
    }
    fetchItems()
  }, [])

  console.log("Component rendering, items:", items)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Art Gallery</h1>
      <div className="text-center mb-8">
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Submit New Art
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items && items.map((item) => <Itemcard key={item.id} item={item} />)}
      </div>
    </div>
  )
}