import React from "react";

export default function Hero() {
  return (
    <>
      {/* Container */}
      <div className="text-center container mx-auto h-screen grid place-items-center">
        <div className="space-y-10">
          {/* Hero Text */}
          <div className="space-y-3">
            <h1 className="text-gray-100 font-poppins md:text-4xl lg:text-5xl text-3xl font-medium">
              Find Your Dream Study
            </h1>
            <p className="leading-relaxed text-sm text-gray-200">
              Discover thousands of Bachelor's Degrees worldwide!
            </p>
          </div>
          {/* Search */}
          <div>
            <form className="flex gap-2 justify-center">
              <div className="relative">
                <input
                  type="search"
                  name="q"
                  className=" text-sm w-52 text-gray-900 bg-gray-100 p-2 focus:outline-none focus:text-gray-900"
                  placeholder="What To Study?"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className=" py-2 px-4 text-sm text-white bg-green-500 hover:bg-green-500 transition-all"
              >
                <svg
                  className="w-4 h-4 absolute right-0 m-2 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
