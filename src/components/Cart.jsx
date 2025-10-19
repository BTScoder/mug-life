import { useCart } from "../context/CartContext";
import { Minus, Plus } from "lucide-react";
const Cart = () => {
  const { cart, addToCart, decreaseQuantity } = useCart();

  // Calculate cart totals
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="mt-10 ps-10">
      <h1 className="text-dark-brown text-[30px] font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <ul className="mx-auto w-[80%] lg:mx-0">
          {cart.map((item) => (
            <li
              key={item.id}
              className="border-dark-brown/10 hover:border-dark-brown/15 mt-4 flex w-full flex-col items-center gap-6 rounded-2xl border-2 p-2 transition-all duration-100 hover:shadow-2xl lg:flex-row"
            >
              <div className="aspect-[4/3] w-full flex-shrink-0 overflow-hidden lg:w-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl object-cover lg:h-30 lg:w-40"
                />
              </div>
              <div className="flex w-64 flex-shrink-0 flex-col gap-3 text-center lg:text-left">
                <span className="text-[24px] lg:text-[19px]">{item.name}</span>
                <span className="text-dark-brown text-[24px]">
                  ${item.price}
                </span>
              </div>
              <div className="flex w-32 flex-shrink-0 items-center justify-center gap-4">
                <Minus
                  className="h-8 w-8 cursor-pointer transition-transform hover:scale-110"
                  onClick={() => decreaseQuantity(item)}
                />
                <p className="min-w-[2ch] text-center font-semibold">
                  {item.quantity}
                </p>
                <Plus
                  className="h-8 w-8 cursor-pointer transition-transform hover:scale-110"
                  onClick={() => addToCart(item)}
                />
              </div>
              <p className="text-dark-brown flex w-32 flex-shrink-0 gap-2 text-center text-[30px] lg:block lg:text-right">
                <span className="text-[23px] lg:hidden">Total:</span>$
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="mx-auto mt-8 w-[80%] lg:mx-0 lg:w-[80%]">
          <div className="border-dark-brown/20 rounded-2xl border-2 p-6">
            <h2 className="text-dark-brown mb-4 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-lg font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="text-lg font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="border-dark-brown/20 my-3 border-t"></div>

              <div className="flex items-center justify-between">
                <span className="text-dark-brown text-xl font-bold">Total</span>
                <span className="text-dark-brown text-2xl font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="bg-dark-brown text-light-brown hover:bg-light-brown hover:text-dark-brown mt-6 w-full rounded-2xl px-6 py-3 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
