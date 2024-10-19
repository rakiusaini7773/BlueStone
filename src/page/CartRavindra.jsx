import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa"; // Import the trash icon

const CartRavindra = ({ setIsCartOpen }) => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Access cart items and remove function from context

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Cart Items Section */}
            <div className="md:col-span-3">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center">
                    {/* Add image if available */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                    )}
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-lg font-medium">{item.price}</span>
                  {/* Delete Button with Icon */}
                  <button
                    onClick={() => removeFromCart(item)} // Call the remove function
                    className="text-red-600 hover:text-red-800 ml-4"
                    aria-label="Remove item from cart" // Accessibility feature
                  >
                    <FaTrash className="w-6 h-6" /> {/* Render the trash icon */}
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span>Subtotal</span>
                <span className="font-bold">{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span>Shipping</span>
                <span className="font-bold">5.99</span>
              </div>
              <div className="flex justify-between text-xl font-bold py-2">
                <span>Total</span>
                <span>{(totalPrice + 5.99).toFixed(2)}</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mt-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartRavindra;
