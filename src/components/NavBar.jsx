import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-20 p-4 lg:flex-col lg:py-10">
        <div className="flex items-center gap-4">
          {/* <img src="/images/logo.jpg" alt="Coffee" width={70} height={70} /> */}
          <Link to="/">
            <h1 className="text-dark-brown text-[30px] font-extrabold">
              Mug Life
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10 lg:flex-col">
            <li>
              <Link to="/" className="hover:text-dark-brown transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-dark-brown transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-dark-brown transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <button className="relative" onClick={() => navigate("/cart")}>
            <ShoppingBag className="text-coffee-brown h-8 w-8" />
            <p className="bg-dark-brown absolute -top-2 -right-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
              <span className="text-sm">{cart.length}</span>
            </p>
          </button>

          {/* Hamburger Menu Button - Mobile only */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="h-8 w-8" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-6 p-6">
            <li>
              <Link
                to="/"
                className="hover:text-dark-brown block text-xl transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-dark-brown block text-xl transition-colors"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-dark-brown block text-xl transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay - darkens background when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default NavBar;
