import { useContext, useState } from "react";
import data from "../../data/menu.json";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

const topDishes = data["Top Dishes"];

const BestSeller = () => {
  
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? topDishes : topDishes.slice(0, 4);

  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  const handleToggleWishlist = (item) => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };
  
  return (
    <section className="w-full relative top-[72px] py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-(--primary-color) text-center uppercase mb-15">
          Best Seller
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          {displayedProducts.map((item) => {
            const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
            const quantityInCart = itemInCart ? itemInCart.quantity : 0;
            return (
              <div key={item.id} className="shadow-lg">
                <figure className="relative w-full mb-3">
                  <img
                    src={item.image_url}
                    className="h-[300px] object-cover w-full"
                    alt="Item"
                  />
                  <span className="absolute bottom-0 left-0 right-0 py-1 bg-(--creamy-color) text-center text-lg font-medium text-(--secondary-color)">
                    {item.price}
                  </span>
                </figure>
                <figcaption className="p-4 h-[150px] flex flex-col justify-between">
                  <h4 className="text-(--primary-color) font-semibold text-xl md:text-2xl mb-2">
                    {item.name}
                  </h4>
                  <p className="text-(--secondary-color) font-normal text-sm md:text-lg">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <div className="w-1/2 flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-(--third-color) bg-(--creamy-color) cursor-pointer"
                      >
                        <i className="fa-solid text-(--secondary-color) fa-minus"></i>
                      </button>
                      <p className="text-(--primary-color) font-medium text-lg md:text-xl">
                        {quantityInCart}
                      </p>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-(--third-color) bg-(--creamy-color) cursor-pointer"
                      >
                        <i className="fa-solid text-(--secondary-color) fa-plus"></i>
                      </button>
                    </div>
                    <div className="w-1/2 flex items-center justify-end gap-3">
                      <button
                        className="w-8 h-8 flex justify-center items-center cursor-pointer"
                        onClick={() => handleToggleWishlist(item)}
                      >
                        <i
                          className={`fa-${
                            isInWishlist(item.id) ? "solid" : "regular"
                          } text-red-500 text-2xl fa-heart`}
                        ></i>
                      </button>
                      {quantityInCart === 0 && (
                        <button
                          onClick={() => addToCart(item)}
                          className="w-8 h-8 flex justify-center items-center cursor-pointer"
                        >
                          <i className="fa-solid text-(--secondary-color) text-2xl fa-cart-shopping"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </figcaption>
              </div>
            );
          })}
        </div>
          {!showAll && (
            <button
              onClick={() => {
                setShowAll(true);
              }}
              className="relative px-7 py-2 left-1/2 -translate-x-1/2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
            >
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative text-xl font-semibold">Show More</span>
            </button>
          )}
      </div>
    </section>
  );
}

export default BestSeller;