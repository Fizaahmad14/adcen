"use client";
import React from "react";
import Explore from "./Explore";
import exploreItems, { uniNames } from "./ExploreContent";

import { notFound } from "next/navigation";


async function getData() {
    const res = await fetch("http://localhost:3000/api/lists", {cache: "no-store"});
    if (!res.ok) return notFound();
    return res.json();
}

const data = getData();
console.log(data);

export default function Explores() {
  return (
    <>
      <Explore
        itemLength={exploreItems.length}
        nameArr={uniNames}
        topSpacing={"pt-28 mb-24"}
        heroText={"Explore Universities"}
      />
    </>
  );
}
