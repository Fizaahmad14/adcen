"use client";
import { createContext, useState, useContext } from 'react';



const WishlistContext = createContext();
const FavoritesContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const useFavorites = () => {
    return useContext(FavoritesContext);
};



export const WishlistProvider = ({ children }) => {
    const [wishlistCount, setWishlistCount] = useState(0);

    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (itemId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [itemId]: !prevFavorites[itemId] // Toggle favorite state for the item
        }));
    };


    let initWishListItem = [];
    let [wishListItems, setWishListItems] = useState(initWishListItem);

    const delItem = (name) => {
        const updatedItems = wishListItems.filter(
            (item) => item.Name !== name
        );
        setWishListItems(updatedItems);
        setWishlistCount(updatedItems.length);
    };

    const addItem = (item) => {
        let sr =
            wishListItems.length === 0
                ? 1
                : wishListItems[wishListItems.length - 1].sr + 1;
        // const newItem = {
        //     sr: sr,
        //     is: item.id,
        //     Name: item.Name,
        //     href: item.href,
        //     src: item.src,
        //     Degree: item.Degree,
        //     Campus: item.Campus,
        // };
        // const isDuplicate = wishListItems.some((existingItem) => {
        //     return existingItem.name === newItem.name;
        // });
        setWishListItems([...wishListItems, item
        ]);
        setWishlistCount(wishListItems.length + 1);
    };


    return (
        <WishlistContext.Provider value={{ wishListItems, wishlistCount, addItem, delItem, favorites, toggleFavorite }}>
            {children}
        </WishlistContext.Provider>
    );
};



