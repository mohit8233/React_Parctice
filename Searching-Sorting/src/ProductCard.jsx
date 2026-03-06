const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 
    hover:shadow-xl transition duration-300 border">

      <h3 className="text-lg font-bold text-gray-800">
        {product.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Category: {product.category}
      </p>

      <p className="text-sm text-gray-500">
        Stock: {product.stock}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-blue-600 font-semibold">
          ₹{product.price}
        </span>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;