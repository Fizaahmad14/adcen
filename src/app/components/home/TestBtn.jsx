import Link from "next/link";
import React from "react";
import { SiTestcafe } from "react-icons/si";

export default function TestBtn() {
  return (
    <>
      <div className="w-full px-5  mx-auto container">
        <div className="bg-green-600 rounded flex items-center justify-between text-gray-100 px-6 py-4">
          <div className="flex items-center gap-4 justify-center">
            <SiTestcafe className="text-6xl" />
            <p className="text-xl font-semibold">
              Take a test to find out what you are good at!
            </p>
          </div>
          <Link
            href="/test-options"
            className="bg-gray-100 rounded hover:bg-white text-gray-900 px-4 py-2 text-base"
          >
            Take a Test
          </Link>
        </div>
      </div>
    </>
  );
}
