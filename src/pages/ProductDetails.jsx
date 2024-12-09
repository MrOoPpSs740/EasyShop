import React from "react";
import { useParams } from "react-router-dom";

// Product data (you can fetch this from an API or global state in a real-world scenario)
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    rating: 4.5,
    description:
      "Premium wireless headphones with active noise cancellation and superb sound quality. Perfect for traveling or working.",
    image: "https://via.placeholder.com/500",
    features: [
      "Active noise cancellation",
      "20-hour battery life",
      "Bluetooth 5.0",
      "Comfortable ear pads",
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149.99",
    rating: 4.8,
    description:
      "A sleek, stylish, and feature-packed smart watch with heart rate monitor, GPS, and fitness tracking.",
    image: "https://via.placeholder.com/500",
    features: [
      "Heart rate monitor",
      "Fitness tracking",
      "Water-resistant",
      "GPS integration",
    ],
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: "$1299.99",
    rating: 4.7,
    description:
      "The ultimate gaming laptop with a powerful GPU and smooth 120Hz refresh rate display for the best gaming experience.",
    image: "https://via.placeholder.com/500",
    features: [
      "Intel i7 processor",
      "16GB RAM",
      "RTX 3070 graphics",
      "120Hz display",
    ],
  },
  {
    id: 4,
    name: "Smartphone",
    price: "$699.99",
    rating: 4.6,
    description:
      "A flagship smartphone with an exceptional camera system, fast processing, and long battery life.",
    image: "https://via.placeholder.com/500",
    features: [
      "50MP camera",
      "5G support",
      "Fast charging",
      "128GB storage",
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-10 mx-auto">
        <h1 className="text-3xl font-bold text-center">Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-80"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-700">{product.price}</p>
            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center">
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

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Features:</h3>
              <ul className="pl-5 space-y-1 text-gray-600 list-disc">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="flex mt-6 space-x-4">
              <button className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
              <button className="px-6 py-3 text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
