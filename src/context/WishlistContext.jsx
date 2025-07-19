import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const localWishlist = localStorage.getItem("wishlistItems");
      return localWishlist ? JSON.parse(localWishlist) : [];
    } catch (error) {
      console.error("Failed to parse wishlist from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const itemExists = prevItems.some((i) => i.id === item.id);
      if (itemExists) {
        toast("Item is already in your wishlist!", { icon: "ℹ️" }); 
        return prevItems;
      } else {
        toast.success(`${item.name} added to wishlist! ❤️`);
        return [...prevItems, item];
      }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id);
      if (itemToRemove) {
        toast.error(`${itemToRemove.name} removed from wishlist. 💔`); 
      }
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;