import { Link, useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg'
import Testimonials from '../Testimonials/Testimonials';
import BestSeller from '../BestSeller/BestSeller';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const Home = () => {
  
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);
  
  const [isVisible, setIsVisible] = useState(false);
  
  function buttonVisibility() {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    buttonVisibility();
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, []);

  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <section className="relative top-[72px] w-full pt-20 bg-(--creamy-color) min-h-[calc(100vh-72px)]">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-[5%]">
            <div className="w-full md:w-[55%]">
              <h1 className="text-(--primary-color) font-extrabold text-2xl md:text-4xl mb-5">
                Discover a world of creamy dairy products and luscious
                confections with our brand.
              </h1>
              <p className="text-(--secondary-color) font-semibold text-lg md:text-2xl w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] mb-5 md:mb-10">
                Indulge in the finest dairy products, made with love and fresh
                ingredients
              </p>
              <button
                onClick={() => {
                  navigate("/menu");
                }}
                className="relative px-7 py-2 md:px-10 md:py-3.5 overflow-hidden group bg-gradient-to-r from-(--secondary-color) to-(--primary-color) hover:bg-gradient-to-r hover:from-(--secondary-color) hover:to-(--primary-color) text-white transition-all ease-out duration-300 cursor-pointer"
              >
                <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                <span className="relative text-xl font-semibold">Our Menu</span>
              </button>
            </div>
            <figure className="w-full md:w-[35%] mb-20 md:mb-0">
              <img
                src={heroImage}
                className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-(--hero-img-border)"
                alt="Hero image"
              />
            </figure>
          </div>
        </div>
      </section>
      {isVisible ? (
        <Link
          to={"/cart"}
          className="fixed p-2 bottom-5 right-5 z-20 w-12 h-12 flex justify-center items-center md:hidden bg-(--creamy-color) border-2 border-(--secondary-color) transition-all ease-out duration-300 opacity-100"
        >
          <i className="fa-solid text-(--secondary-color) text-2xl fa-cart-shopping"></i>
          <div className="absolute inline-flex items-center justify-center text-xs font-bold text-white top-[18px] end-4 -translate-y-1/2">
            {getTotalItemsInCart()}
          </div>
        </Link>
      ) : (
        <Link
          to={"/cart"}
          className="fixed p-2 bottom-5 right-5 z-20 w-12 h-12 flex justify-center items-center md:hidden bg-(--creamy-color) border-2 border-(--secondary-color) transition-all ease-out duration-300 opacity-0"
        >
          <i className="fa-solid text-(--secondary-color) text-2xl fa-cart-shopping"></i>
        </Link>
      )}
      <BestSeller />
      <Testimonials />
    </>
  );
}

export default Home;