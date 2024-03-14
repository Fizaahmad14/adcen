"use client";
import React from "react";
import Explore from "./Explore";
import exploreItems, { uniNames } from "./ExploreContent";

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
