import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Heart, Plus, Minus } from "lucide-react";
const Details = ({ products, toggleFavourite }) => {
  const { id } = useParams();
  const selectedItem = products?.find((item) => item.id === parseInt(id));
  const { cart, addToCart, decreaseQuantity } = useCart();
  const cartItem = cart?.find((item) => item?.id === selectedItem?.id);
  const inCart = cartItem !== undefined && cartItem.quantity > 0;
  const quantity = cartItem?.quantity || 0;
  console.log(cart);
  // console.log(selectedItem);
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-white p-5">
        <div className="h-full w-full lg:grid lg:grid-cols-2 lg:overflow-hidden">
          <div className="flex items-center justify-center">
            {/* <img src={selectedItem?.image} alt="image" /> */}
            <img
              src={selectedItem?.image}
              alt={selectedItem?.name}
              className="w-[400px] rounded-2xl object-contain lg:max-h-[600px] lg:w-auto"
            />
          </div>
          <div className="flex h-full w-full flex-col p-10">
            <div className="flex items-center justify-between">
              <p className="text-dark-brown text-[35px]">
                {selectedItem?.name}
              </p>
              <p className="text-[24px]">${selectedItem?.price}</p>
            </div>
            <div className="mt-4 text-start">
              <p className="text-dark-brown text-[25px]">Details</p>
              <p className="mt-3 text-gray-600">{selectedItem?.longDesc}</p>
            </div>
            <div className="mx-auto mt-5 flex max-w-sm items-center justify-between">
              {selectedItem?.sizes?.map((size) => (
                <button
                  key={size}
                  className="bg-light-brown border-light-brown/10 m-2 rounded-2xl border-2 px-4 py-2 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex-grow"></div>
            <div className="mt-3 flex items-center justify-center gap-4">
              {inCart ? (
                <div className="border-dark-brown flex max-w-md items-center gap-4 border-r-2 pe-10">
                  <Minus
                    className="h-8 w-8"
                    onClick={() => decreaseQuantity(selectedItem)}
                  />
                  <p>{quantity}</p>
                  <Plus
                    className="h-8 w-8"
                    onClick={() => addToCart(selectedItem)}
                  />
                </div>
              ) : (
                <button
                  className="bg-dark-brown text-light-brown border-light-brown/10 hover:bg-light-brown hover:text-dark-brown m-2 w-full rounded-2xl border-2 px-4 py-2"
                  onClick={() => addToCart(selectedItem)}
                >
                  Add to Cart
                </button>
              )}
              <Heart
                className={`h-8 w-8 cursor-pointer transition-all duration-200 hover:scale-160 ${selectedItem?.isFavorite ? "fill-red-700" : ""}`}
                onClick={() => toggleFavourite(selectedItem?.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
