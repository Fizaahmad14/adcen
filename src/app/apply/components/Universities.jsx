"use client";
import WishListItem from "@/app/components/wishlist/WishListItem";
import { useWishlist } from "@/app/components/wishlist/WishListContext";

export default function Universities() {
  const { wishListItems, wishlistCount, delItem } = useWishlist();
  const handleDelItem = (item) => {
    delItem(item);
  };
  return (
    <>
      <div className="bg-white space-y-3 rounded p-4">
        <h2 className="text-lg leading-tight font-poppins underline underline-offset-4 decoration-green-500">
          Wishlist
        </h2>
        <div className="overflow-y-auto max-h-screen min-h-min">
          {wishListItems.map((x) => {
            return (
              <>
                <WishListItem
                  item={x}
                  key={x.Name}
                  onDelete={handleDelItem}
                />
                {/* We have use key here, q k agr hum map se render krate hain kisi cheez ko tu ik unique key bhejni perti he */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
