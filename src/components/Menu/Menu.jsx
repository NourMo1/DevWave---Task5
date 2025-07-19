import { Link } from "react-router-dom";
import data from "../../data/menu.json";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

const Menu = () => {
  
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const newFilteredData = {};

    Object.keys(data).forEach((categoryName) => {
      const filteredItems = data[categoryName].filter((item) => {
        const matchesName = item.name.toLowerCase().includes(lowerCaseSearchTerm);
        const matchesDescription = item.description ? item.description.toLowerCase().includes(lowerCaseSearchTerm) : false;
        return matchesName || matchesDescription;
      });

      if (filteredItems.length > 0) {
        newFilteredData[categoryName] = filteredItems;
      }
    });

    setFilteredData(newFilteredData);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const categories = Object.keys(filteredData);

  const handleToggleWishlist = (item) => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  const getQuantityInCart = (itemId) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === itemId);
    return itemInCart ? itemInCart.quantity : 0;
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotalPrice = () => {
    return (
      cartItems.reduce(
        (total, item) => total + item.price.slice(0, 3) * item.quantity,
        0
      )
    );
  };

  return (
    <section className="w-full relative top-[72px] py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row justify-between gap-5 mb-15">
          <h2 className="text-2xl md:text-4xl font-semibold text-(--primary-color) text-center uppercase">
            Our Menu
          </h2>
          <div className="relative mx-auto sm:mx-0">
            <input
              placeholder="Search..."
              className="input shadow-lg placeholder:text-zinc-400 focus:border-2 border-(--creamy-color) px-5 py-3 w-56 transition-all focus:w-64 outline-none"
              name="search"
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              className="size-6 absolute top-3 right-3 text-zinc-400"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.length === 0 && searchTerm !== "" ? (
            <p className="col-span-2 text-xl text-center md:text-start text-zinc-800">
              No results found for "{searchTerm}".
            </p>
          ) : (
            categories.map((category, index) => (
              <div key={index} className="col-span-1 md:col-span-2 p-4">
                <h4 className="text-xl md:text-2xl font-semibold text-(--secondary-color) capitalize mb-5">
                  {category}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredData[category].map((item) => {
                    const quantity = getQuantityInCart(item.id);
                    return (
                      <div key={item.id} className="shadow-lg">
                        <figure className="relative w-full mb-3">
                          <img
                            src={item.image_url}
                            className="h-[200px] object-cover w-full"
                            alt={item.name}
                          />
                          <span className="absolute bottom-0 left-0 right-0 py-1 bg-(--creamy-color) text-center text-lg font-medium text-(--secondary-color)">
                            {item.price}
                          </span>
                        </figure>
                        <figcaption className="p-4 min-h-[150px] flex flex-col justify-between">
                          <h5 className="text-(--primary-color) font-semibold text-lg md:text-xl mb-2">
                            {item.name}
                          </h5>
                          <p className="text-zinc-800 font-normal text-sm md:text-lg">
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
                                {quantity}
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
                              {quantity === 0 && (
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
              </div>
            ))
          )}
          <div className="fixed bottom-0 left-0 right-0 z-10 md:h-[400px] md:sticky md:top-0 md:bottom-40 md:col-span-1 p-4 bg-(--creamy-color)">
            <div className="flex justify-between items-center md:flex-col md:items-start gap-5">
              <h4 className="text-xl md:text-2xl font-semibold text-(--secondary-color) capitalize">
                Order
              </h4>
              <Link
                to={"/cart"}
                className="w-[200px] sm:w-[300px] md:w-full px-4 py-2 sm:px-6 sm:py-2.5 md:hidden overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
              >
                <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                <span className="relative flex justify-between items-center gap-2">
                  <div>
                    <p className="text-sm">{getCartTotalPrice()} EGP</p>
                    <p className="text-xs">*includes VAT</p>
                  </div>
                  <div className="justify-self-end">View Cart</div>
                </span>
              </Link>
              <div className="hidden md:w-full md:h-[300px] md:flex md:flex-col md:justify-between md:gap-5">
                <div className="p-4 bg-(--testimonial-color) mb-3">
                  <div className="flex justify-between text-2xl text-zinc-800 gap-3 mb-5">
                    <span className="font-semibold">Number of items:</span>
                    <p className="font-semibold">{getTotalItemsInCart()}</p>
                  </div>
                  <p className="text-lg font-medium text-zinc-800">{getCartTotalPrice()} EGP</p>
                  <p className="text-sm text-zinc-800">* includes VAT</p>
                </div>
                <Link
                  to={"/cart"}
                  className="relative text-center px-7 py-2 left-1/2 -translate-x-1/2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
                >
                  <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                  <span className="relative text-xl font-semibold">
                    View Cart
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;