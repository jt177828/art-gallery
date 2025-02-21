export default function Itemcard({ item }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl hover:scale-105">
      <img className="w-full h-48 object-cover" src={item.image || "/placeholder.svg"} alt={item.name} />
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
        <p className="text-gray-400">{item.year}</p>
      </div>
    </div>
  )
}