"use client";
import { React, useState } from "react";
import CostItem from "./CostItem";
import { CostEstim } from "@/components/component/CostEstim";

export default function page() {
  const [selectedUniversityIndex, setSelectedUniversityIndex] =
    useState(0);

  const handleUniversitySelect = (index) => {
    setSelectedUniversityIndex(index);
  };
  return (
    <>
      <div className="text-gray-900 h-screen container mx-auto px-5 ">
        <h2 className="text-3xl pt-36 text-center leading-tight font-poppins underline underline-offset-4 decoration-green-500">
          Cost Estimation
        </h2>
        <div className="py-10">
          <CostItem
            selectedUniversityIndex={selectedUniversityIndex}
            onSelect={handleUniversitySelect}
          />
        </div>
        <CostEstim />
      </div>
    </>
  );
}
