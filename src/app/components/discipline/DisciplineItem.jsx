import Link from "next/link";
import React from "react";

export default function DisciplineItem({ href, icon, title }) {
  return (
    <>
      <Link
        href={href}
        className="hover:scale-105 hover:shadow-md hover:shadow-green-300 hover:bg-gray-50 transition-all duration-200"
      >
        <div className="p-5 bg-gray-100 h-full text-center  flex items-center justify-center flex-col gap-4">
          {/* Icon */}
          <div>{icon}</div>
          <h3 className="text-lg">{title}</h3>
        </div>
      </Link>
    </>
  );
}
