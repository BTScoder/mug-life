import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Plus, Heart, Minus } from "lucide-react";
const Card = ({ product, favorite, toggleFavourite }) => {
  const { cart, addToCart, decreaseQuantity } = useCart();
  const cartItem = cart?.find((item) => item.id === product.id);
  const inCart = cartItem !== undefined && cartItem.quantity > 0;
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="max-w-sm cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Image section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <p className="bg-light-brown absolute top-5 left-5 z-100 inline rounded-xl p-2 text-black">
          {product.category.split(" ")[0]}
        </p>
      </div>

      {/* Text section */}
      <Link to={`/details/${product.id}`}>
        <div className="p-4">
          <h3 className="text-dark-brown my-5 text-[26px] font-light">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
            {product.description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-dark-brown text-[26px] font-light">
              ${product.price}
            </span>
            <div className="flex items-center gap-6">
              {inCart ? (
                <div className="flex items-center gap-4">
                  <Minus
                    className="h-6 w-6"
                    onClick={() => decreaseQuantity(product)}
                  />
                  <p>{quantity}</p>
                  <Plus
                    className="h-6 w-6"
                    onClick={() => addToCart(product)}
                  />
                </div>
              ) : (
                <button
                  className="bg-dark-brown/50 hover:bg-light-brown rounded-lg px-3 py-1"
                  onClick={() => addToCart(product)}
                >
                  <Plus className="h-6 w-6 transition-transform duration-200 hover:scale-110 hover:rotate-210 hover:transform" />
                </button>
              )}

              <Heart
                className={`h-6 w-6 cursor-pointer transition-all duration-200 hover:scale-160 ${product.isFavorite ? "fill-red-700" : ""}`}
                onClick={() => toggleFavourite(product.id)}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
