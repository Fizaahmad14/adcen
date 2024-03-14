import React from "react";
import DisciplineItem from "./DisciplineItem";
import disciplineItems from "./DisciplineContent";

export default function Discipline() {
  return (
    <>
      <div className="space-y-8 container mx-auto px-5">
        {/* Heading */}
        <h2 className="text-3xl leading-tight font-poppins underline underline-offset-4 decoration-green-500">
          Browse By Discipline
        </h2>

        {/* Disciplines */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {disciplineItems.map((item, index) => {
            return (
              <DisciplineItem
                href={item.href}
                icon={item.icon}
                title={item.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
