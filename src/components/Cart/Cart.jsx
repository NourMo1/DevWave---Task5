import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const getItemTotalPrice = (item) => {
    return (item.price.slice(0, 3) * item.quantity);
  };

  const getCartTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price.slice(0, 3) * item.quantity, 0) + 45;
  };

  const navigate = useNavigate();

  return (
    <section className="w-full relative top-[72px] py-20 bg-(--creamy-color) min-h-[calc(100vh-72px)]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-(--primary-color) text-center uppercase mb-15">
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <div className="text-center p-10 bg-white shadow-lg flex flex-col">
            <p className="text-xl md:text-2xl text-gray-800 mb-5">
              Your cart is empty. Start adding some delicious items! 😋
            </p>
            <button
              onClick={() => {
                navigate("/menu");
              }}
              className="relative w-fit px-7 py-2 left-1/2 -translate-x-1/2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
            >
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative text-xl font-semibold">Go To Menu</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 bg-white p-4 shadow-lg">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center sm:flex-row gap-4 py-4 border-b border-(--creamy-color) last:border-b-0"
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-(--primary-color)">
                      {item.name}
                    </h3>
                    <p className="text-xl md:text-2xl text-zinc-800"></p>
                    <div className="flex items-center justify-center sm:justify-start mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-(--third-color) bg-(--creamy-color) cursor-pointer"
                        disabled={item.quantity === 1}
                      >
                        <i className="fa-solid text-(--secondary-color) fa-minus"></i>
                      </button>
                      <p className="text-(--primary-color) font-medium text-lg md:text-xl mx-3">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-(--third-color) bg-(--creamy-color) cursor-pointer"
                      >
                        <i className="fa-solid text-(--secondary-color) fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-end">
                    <p className="text-xl font-bold text-(--secondary-color) mb-2">
                      {getItemTotalPrice(item)} EGP
                    </p>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                      className="relative px-7 py-2 left-1/2 -translate-x-1/2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-red-300 to-red-700 hover:bg-gradient-to-r hover:from-red-300 hover:to-red-700 text-white transition-all ease-out duration-300 cursor-pointer"
                    >
                      <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                      <span className="relative text-xl font-semibold">
                        Remove
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/3 bg-white p-4 shadow-lg h-fit sticky top-28">
              <h3 className="text-2xl font-semibold text-(--primary-color) mb-5">
                Order Summary
              </h3>
              <div className="flex justify-between text-lg text-zinc-800 mb-3">
                <span>Subtotal ({cartItems.length} items)</span>
                <span></span>
              </div>
              <div className="flex justify-between text-lg text-zinc-800 mb-3">
                <span>Shipping</span>
                <span>45 EGP</span>
              </div>
              <div className="flex justify-between text-xl font-semibold text-(--secondary-color) pt-4 border-t-2 border-(--creamy-color)">
                <span>Total</span>
                <span>{getCartTotalPrice()}</span>
              </div>
              <button
                className="relative mt-5 w-full px-7 py-2 left-1/2 -translate-x-1/2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-green-300 to-green-700 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-700 text-white transition-all ease-out duration-300 cursor-pointer"
              >
                <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                <span className="relative text-xl font-semibold">
                  Proceed To Checkout
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;