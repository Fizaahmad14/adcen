import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

import { Button } from "@nextui-org/react";

import { useWishlist } from "../components/wishlist/WishListContext";

export default function ExploreItem({ addItem, delItem, item }) {
  const { favorites, toggleFavorite } = useWishlist();

  const isFavorite = favorites[item.id] || false;

  const handleToggleFavorite = (item1) => {
    if (!isFavorite) {
      addItem(item1);
      toggleFavorite(item.id);
    } else {
      delItem(item1.Name);
      toggleFavorite(item.id);
    }
  };

  return (
    <>
      <div className="h-full w-full rounded space-y-6 border p-6 bg-gray-50 border-gray-500 flex flex-col ">
        <div className="w-full  grid place-items-center">
          <Image
            width={150}
            // className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={item.src}
            alt={item.Name}
          />
        </div>

        <div className=" flex flex-col justify-between h-full ">
          <div>
            <h1 className="font-poppins text-lg font-medium text-gray-900 mb-3">
              {item.Name}
            </h1>
            <div className="text-sm mb-4 text-gray-600 flex justify-between items-center">
              <p className=" ">{item.Degree}</p>
              <p className=" ">{item.Campus}</p>
            </div>
          </div>
          <div>
            <hr className="h-[,5px] border-[.5px] border-gray-300" />
            <div className="flex pt-2 items-center flex-row-reverse justify-between">
              <Link
                href={item.href}
                className="text-sm flex items-center justify-center gap-2 text-green-500 hover:text-green-400 transition-all"
              >
                Learn More <GoArrowRight />
              </Link>
              <Button
                size="sm"
                onClick={() => handleToggleFavorite(item)}
                isIconOnly
                className="bg-transparent"
              >
                {isFavorite ? (
                  <FaHeart className="text-lg text-green-500" />
                ) : (
                  <FaRegHeart className="text-lg text-green-500" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
