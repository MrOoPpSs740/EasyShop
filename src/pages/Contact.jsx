import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Get in Touch
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Contact Form
          </h3>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
