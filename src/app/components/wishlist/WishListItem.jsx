import { Image } from "@nextui-org/react";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@nextui-org/react";

import { useWishlist } from "./WishListContext";

export default function WishListItem({ item, onDelete }) {
  const { toggleFavorite } = useWishlist();

  const handleDel = (item3) => {
    onDelete(item3.Name);
    toggleFavorite(item.id);
  };

  return (
    <>
      <div className=" p-2">
        <div className="bg-white rounded-md space-y-4 p-2 shadow-md">
          <div className="flex justify-between items-center w-full">
            {/* Name */}
            <h3 className="text-md font-poppins">{item.Name}</h3>
            {/* Del Icon */}
            <Button
              size="sm"
              isIconOnly
              onClick={() => handleDel(item)}
              className="bg-red-500 mr-2 text-white"
            >
              <MdDeleteOutline className="text-xl" />
            </Button>
          </div>

          {/* Details */}
          <div className="flex justify-between items-center">
            {/* Degree & Campus */}
            <div>
              <p className="text-sm text-gray-600">{item.Degree}</p>
              <p className="text-xs text-gray-500">{item.Campus}</p>
            </div>

            {/* Image */}
            <Image width={50} src={item.src} alt={item.Name} />
          </div>
        </div>
      </div>
    </>
  );
}
