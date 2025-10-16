// import { Coffee } from "lucide-react";
// import SearchBar from "./Search";
// import Card from "./Card";
import Hero from "./Hero";
import Features from "./Features";
import Products from "./Products";
const Main = ({ categories, products, loading, toggleFavourite }) => {
  return (
    <div className="my-20 w-full">
      <Hero />
      <Features />
      <Products
        categories={categories}
        products={products}
        loading={loading}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default Main;
