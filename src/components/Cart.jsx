import { useCart } from "../context/CartContext";
const Cart = () => {
  const { cart } = useCart();
  return <div>Cart items</div>;
};

export default Cart;
