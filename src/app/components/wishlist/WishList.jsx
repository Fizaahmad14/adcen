"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import WishListItem from "./WishListItem";
import { FaRegHeart } from "react-icons/fa";

import { useWishlist } from "./WishListContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WishList() {
  const pathName = usePathname();
  const { wishListItems, wishlistCount, delItem } = useWishlist();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDelItem = (item) => {
    delItem(item);
  };
  return (
    <>
      <Badge
        className="text-white bg-green-500"
        showOutline={false}
        content={wishlistCount}
        shape="circle"
        size="sm"
      >
        <Button
          size="sm"
          isIconOnly
          onPress={onOpen}
          className="bg-green-500 text-white"
        >
          <FaRegHeart className="text-md" />
        </Button>
      </Badge>
      <Modal
        scrollBehavior="inside"
        size="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="leading-tight font-poppins underline underline-offset-4 decoration-green-500">
                  Wishlist
                </p>
              </ModalHeader>
              <ModalBody>
                {wishListItems.length === 0 ? (
                  <p className="text-lg text-gray-400 text-center">
                    No items To Display
                  </p>
                ) : (
                  wishListItems.map((x) => {
                    return (
                      <>
                        <WishListItem
                          item={x}
                          key={x.Name}
                          onDelete={handleDelItem}
                        />
                      </>
                    );
                  })
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  isDisabled={
                    wishListItems.length === 0 ||
                    pathName === "/apply"
                  }
                  as={Link}
                  href="/apply"
                  className="bg-green-500 text-white"
                  onPress={onClose}
                >
                  Apply Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
