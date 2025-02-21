import { React } from "react"

export default function Itemcard({item}) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <h4 className="text-gray-700 text-base">{item.name}</h4>
        <img className="w-full h-48 object-cover" src={item.image} alt={item.name}></img>
        <h4 className="text-gray-700 text-base">{item.year}</h4>
    </div>
  )
}
