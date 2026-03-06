import { useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {

  const [search, setSearch] = useState("");

  const data = [
    { id: 1, name: "Apple", price: 120, category: "Fruit", stock: 50 },
    { id: 2, name: "Banana", price: 40, category: "Fruit", stock: 100 },
    { id: 3, name: "Mango", price: 150, category: "Fruit", stock: 30 },
    { id: 4, name: "Orange", price: 80, category: "Fruit", stock: 60 },
    { id: 5, name: "Grapes", price: 90, category: "Fruit", stock: 45 },
    { id: 6, name: "Pineapple", price: 70, category: "Fruit", stock: 25 },
    { id: 7, name: "Strawberry", price: 200, category: "Fruit", stock: 20 },
    { id: 8, name: "Watermelon", price: 60, category: "Fruit", stock: 35 },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Fresh Fruits Collection 🍓
          </h2>
          <p className="text-gray-500 mt-2">
            Search your favorite fruit below
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search fruit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-3 rounded-xl border 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Grid */}
        {filteredData.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredData.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg">
            No Fruit Found ❌
          </p>
        )}

      </div>
    </div>
  );
};

export default Home;