import { Image } from "@nextui-org/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { Button } from "@nextui-org/react";

import { useWishlist } from "../components/wishlist/WishListContext";

export default function CostItem({ item }) {
  const { favorites, toggleFavorite, addItem, delItem } =
    useWishlist();

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
      <div className="shadow-md bg-gray-50 space-y-4 rounded-md p-4 h-max">
        <div className="w-full ">
          <div className="flex text-lg items-center justify-between w-full">
            <h3 className=" font-poppins text-xl font-semibold text-gray-900 mb-3">
              {item.Name}
            </h3>
            <p className="text-xl font-bold font-poppins text-gray-700">
              PKR{" "}
              {(
                +item.fees.Tuition +
                +item.fees.Hostel +
                +item.fees.Transport +
                +item.fees.Food
              ).toLocaleString()}
              <span className="text-sm text-green-500 font-medium">
                {" "}
                /semester
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="text-base text-gray-700">
              {item.Degree} <span className="text-green-600">||</span>{" "}
              {item.Campus}
            </p>
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
        <hr className="border" />
        <div className="flex items-center w-full justify-between">
          <Image width={100} alt={item.Name} src={item.src} />
          <div className="text-gray-700 flex gap-6 justify-start text-base space-y-1">
            <div className="pt-1">
              <p>Tuition</p>
              <p>Hostel</p>
              <p>Transport</p>
              <p>Food</p>
            </div>
            <div>
              <div className="flex items-center ">
                <p>{item.fees.Tuition}</p>
              </div>
              <div className="flex items-center ">
                <p>{item.fees.Hostel}</p>
              </div>
              <div className="flex items-center ">
                <p>{item.fees.Transport}</p>
              </div>
              <div className="flex items-center ">
                <p>{item.fees.Food}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
