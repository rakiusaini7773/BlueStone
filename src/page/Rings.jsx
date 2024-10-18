import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import products from "../Data/products";

const Rings = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  const handleAddToCart = (product) => {
    addToCart(product); // Call the addToCart function with the selected product
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">All Rings</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <li key={product.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src={product.image} // Use the product image
                alt={product.name}
                className="w-32 h-32 object-cover mb-4" // Style the image
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.price}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleAddToCart(product)} // Add product to cart
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rings;
