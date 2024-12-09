// src/components/Products.jsx
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99.99",
      rating: 4.5,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149.99",
      rating: 4.8,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "$1299.99",
      rating: 4.7,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Smartphone",
      price: "$699.99",
      rating: 4.6,
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-48"
              />
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-1 text-gray-600">{product.price}</p>
                <div className="flex items-center mt-2">
                  {/* Rating */}
                  <div className="flex text-yellow-500">
                    {Array(Math.floor(product.rating))
                      .fill(0)
                      .map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-5 h-5"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.89a1 1 0 00-1.175 0l-3.977 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.977-2.89c-.783-.57-.381-1.81.588-1.81h4.905a1 1 0 00.95-.69L9.05 2.927z" />
                        </svg>
                      ))}
                    {product.rating % 1 !== 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.89a1 1 0 00-1.175 0l-3.977 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.977-2.89c-.783-.57-.381-1.81.588-1.81h4.905a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                    )}
                  </div>
                  <span className="ml-2 text-gray-600">({product.rating})</span>
                </div>
                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
                    Add to Cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="px-4 py-2 text-gray-800 transition duration-300 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
