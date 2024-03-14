"use client";
import React from "react";
import ExploreItem from "./ExploreItem";

import { useWishlist } from "@/app/components/wishlist/WishListContext";
import exploreItems from "./ExploreContent";

export default function Explore({
  itemLength,
  nameArr,
  topSpacing,
  heroText,
}) {
  const { addItem, delItem } = useWishlist();

  exploreItems.forEach((element, index) => {
    element.id = index;
  });

  const handleAddItem = (item) => {
    addItem(item);
  };
  const handleDelItem = (item) => {
    delItem(item);
  };

  return (
    <>
      <div
        className={`container space-y-8 mx-auto px-5 ${topSpacing}`}
      >
        <h2 className="text-3xl text-center leading-tight font-poppins underline underline-offset-4 decoration-green-500">
          {heroText}
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Universities */}
          {exploreItems
            .slice(0, itemLength)
            .filter((item) => {
              if (nameArr.includes(item.Name)) {
                return item;
              }
            })
            .map((item, index) => {
              return (
                <ExploreItem
                  item={item}
                  addItem={handleAddItem}
                  delItem={handleDelItem}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
