import { Button } from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";

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
            <p className="leading-relaxed text-base text-gray-200">
              Discover thousands of Bachelor's Degrees worldwide!
            </p>
          </div>
          {/* Search */}
          <div>
            <form className="flex gap-2 items-center justify-center">
              <div className="relative">
                <input
                  type="search"
                  name="q"
                  className=" text-sm w-52 rounded text-gray-900 bg-gray-100 p-2 focus:outline-none focus:text-gray-900"
                  placeholder="What To Study?"
                  autoComplete="off"
                />
              </div>
              <Button
                startContent={<IoSearchSharp />}
                size="sm"
                variant="solid"
                className="bg-green-500 rounded py-4 text-base text-white"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
