import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="mx-auto flex max-w-[1200px] items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <img src="/images/logo.jpg" alt="Coffee" width={70} height={70} />
        <h1 className="text-[30px]">Mug Life</h1>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <button>
          <ShoppingBag className="text-coffee-brown h-8 w-8" />
        </button>
        <button>Log In</button>
      </div>
    </nav>
  );
};

export default NavBar;
