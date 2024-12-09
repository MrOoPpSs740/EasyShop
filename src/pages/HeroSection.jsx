import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-[10px] mt-[10px] overflow-hidden text-black bg-gradient-to-br from-white to-gray-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-300 rounded-full opacity-20 filter blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full opacity-20 filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6 py-20 mx-auto lg:px-16 lg:py-32">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          {/* Text Content */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Shop Smarter, Live Better with <span className="text-indigo-600">ShopEasy</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              The ultimate online store for your shopping pleasure. Discover deals, exclusive products, and more.
            </p>

            <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <button className="px-8 py-4 text-lg font-semibold text-white transition bg-indigo-600 rounded-md hover:bg-indigo-500 focus:ring focus:ring-indigo-300">
                Start Shopping
              </button>
              <button className="px-8 py-4 text-lg font-semibold text-indigo-600 transition bg-white rounded-md hover:bg-gray-200 focus:ring focus:ring-gray-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-12 lg:w-1/2 lg:mb-0">
            <div className="relative">
              <img
                src="https://via.placeholder.com/500x400"
                alt="Shopping Experience"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-[-2%] left-[-5%] w-16 h-16 bg-pink-300 rounded-full opacity-80 blur-lg"></div>
              <div className="absolute bottom-[-3%] right-[-5%] w-24 h-24 bg-indigo-600 rounded-full opacity-70 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
