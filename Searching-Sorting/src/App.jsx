import React, { useState } from "react";

const App = () => {
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

  const filteredUsers = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">

      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-white/40">

        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          Search Fruit 🔍
        </h2>

        <input
          type="text"
          placeholder="Search fruit name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 mb-6 rounded-2xl border border-gray-300 
          focus:outline-none focus:ring-4 focus:ring-blue-300 
          focus:border-blue-500 transition duration-300 shadow-sm"
        />

        <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li
                key={user.id}
                className="bg-white rounded-2xl p-5 shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {user.name}
                  </h3>
                  <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    ₹{user.price}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Category: {user.category}
                </p>

                <p className="text-sm text-gray-500">
                  Stock: {user.stock}
                </p>
              </li>
            ))
          ) : (
            <p className="text-center text-red-500 font-semibold">
              No Fruit Found ❌
            </p>
          )}
        </ul>

      </div>

    </div>
  );
};

export default App;