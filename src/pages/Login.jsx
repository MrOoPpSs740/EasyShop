import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section with Image */}
      <div className="items-center justify-center hidden w-1/2 bg-gray-200 lg:flex">
        <img
          src="https://picsum.photos/200/300/?blur"
          alt="Login Visual"
          className="object-cover w-3/5 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section with Form */}
      <div className="flex items-center justify-center flex-1 px-6 bg-gray-50 sm:px-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-extrabold text-center text-gray-800">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Login to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-600"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 text-white transition duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
