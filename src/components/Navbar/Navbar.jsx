import { useContext, useState } from "react";
import logo from "../../assets/blabanlogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="max-h-[72px] bg-(--primary-color) w-full fixed top-0 right-0 left-0 shadow-lg z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3"
          onClick={closeMenu}
        >
          <img src={logo} className="h-8" alt="B.Laban Logo" />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
            B.Laban
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={handleMenuToggle}
          type="button"
          className="flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden cursor-pointer bg-(--secondary-color) rounded-full text-white"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          {menuOpen ? (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M9 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-(--primary-color) md:flex-row md:space-x-4 lg:space-x-8 md:mt-0">
            <li>
              <NavLink
                to={"/home"}
                className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/menu"}
                className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
              >
                Contact
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink
                to={"/cart"}
                className="relative block py-2 px-3 text-(--creamy-color) group"
              >
                <i className="fa-solid text-(--creamy-color) group-hover:text-white text-2xl fa-cart-shopping transition-all ease-out duration-300"></i>
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-(--primary-color) bg-(--creamy-color) border-2 border-(--third-color) rounded-full -top-1 -end-0">
                  {getTotalItemsInCart()}
                </div>
              </NavLink>
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="relative px-6 py-2 overflow-hidden group bg-gradient-to-r from-(--creamy-color) to-(--third-color) hover:bg-gradient-to-r hover:from-(--creamy-color) hover:to-(--third-color) text-(--primary-color) transition-all ease-out duration-300 cursor-pointer"
                >
                  <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                  <span className="relative text-xl font-semibold">Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="relative px-6 py-2 overflow-hidden group bg-gradient-to-r from-(--creamy-color) to-(--third-color) hover:bg-gradient-to-r hover:from-(--creamy-color) hover:to-(--third-color) text-(--primary-color) transition-all ease-out duration-300 cursor-pointer"
                >
                  <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                  <span className="relative text-xl font-semibold">Login</span>
                </button>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="md:hidden absolute top-[72px] left-0 w-full bg-(--primary-color) shadow-lg animate-slideInDown"
            id="mobile-menu"
          >
            <ul className="font-medium flex flex-col p-4">
              <li>
                <NavLink
                  to={"/home"}
                  className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/menu"}
                  className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
                  onClick={closeMenu}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className="block py-2 px-3 text-(--creamy-color) hover:text-white transition-all ease-out duration-300"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="relative px-6 py-2 overflow-hidden group bg-gradient-to-r from-(--creamy-color) to-(--third-color) hover:bg-gradient-to-r hover:from-(--creamy-color) hover:to-(--third-color) text-(--primary-color) transition-all ease-out duration-300 cursor-pointer"
                  >
                    <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                    <span className="relative text-xl font-semibold">
                      Logout
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      closeMenu();
                    }}
                    className="relative px-6 py-2 overflow-hidden group bg-gradient-to-r from-(--creamy-color) to-(--third-color) hover:bg-gradient-to-r hover:from-(--creamy-color) hover:to-(--third-color) text-(--primary-color) transition-all ease-out duration-300 cursor-pointer"
                  >
                    <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                    <span className="relative text-xl font-semibold">
                      Login
                    </span>
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;