import React from "react";

const Aboutus = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600">
            Learn more about our mission, values, and the journey we are on.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6">
              At <span className="text-blue-600 font-bold">ShopEasy</span>, we
              strive to make shopping simple, accessible, and enjoyable for
              everyone. Our platform brings you the best deals, top-notch
              products, and seamless customer experiences.
            </p>
            <p className="text-gray-600">
              Since our inception, we have been dedicated to redefining online
              shopping with innovation, transparency, and trust. We believe in
              connecting people to products that enhance their lives and bring
              joy to everyday moments.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <img
              src="https://picsum.photos/200"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-12 h-12"
                >
                  <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Trusted by Thousands
              </h4>
              <p className="text-gray-600">
                Millions of customers trust us to provide reliable products and
                services worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-12 h-12"
                >
                  <path d="M12 2a10 10 0 0110 10 10.11 10.11 0 01-2.58 6.58A10 10 0 0112 22a10 10 0 01-10-10 10.11 10.11 0 012.58-6.58A10 10 0 0112 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Exceptional Support
              </h4>
              <p className="text-gray-600">
                Our dedicated support team is always ready to assist you 24/7.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-12 h-12"
                >
                  <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Best Deals & Offers
              </h4>
              <p className="text-gray-600">
                Enjoy unbeatable prices and discounts on top-quality products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
