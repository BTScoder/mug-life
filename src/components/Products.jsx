import { useState, useMemo } from "react";
import { Hotel } from "lucide-react";
import SearchBar from "./Search";
import Card from "./Card";
const Products = ({
  products,
  categories,
  loading,
  toggleFavourite,
  addToCart,
  cart,
}) => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Removed productsState and useEffect - using products prop directly now!

  const data = useMemo(() => {
    let value = products || [];

    if (filter !== "All") {
      value = value.filter((product) =>
        product.category
          .toLocaleLowerCase()
          .trim()
          .includes(filter.toLocaleLowerCase().trim()),
      );
    }

    if (searchTerm) {
      value = value.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .trim()
          .includes(searchTerm.toLocaleLowerCase().trim()),
      );
    }

    return value;
  }, [products, filter, searchTerm]);
  return (
    <div className="mt-20">
      {/* Filter */}
      <div className="mx-auto my-10 max-w-3xl text-center">
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="mx-auto mt-10 flex max-w-xl items-center justify-between p-4">
          {categories &&
            categories?.map((category) => (
              <p
                key={category.id}
                className={`hover:border-dark-brown cursor-pointer text-[15px] transition duration-75 ease-in hover:border-b-2 lg:text-lg ${filter === category.name ? "border-dark-brown border-b-2 pb-3 transition-all duration-150 ease-in" : ""}`}
                onClick={() => setFilter(category.name)}
              >
                {category.name}
              </p>
            ))}
        </div>
      </div>
      {/* Product Cards */}
      <div className="mt-5 grid grid-cols-1 place-items-center gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((product) => (
          <Card
            product={product}
            key={product.name}
            toggleFavourite={toggleFavourite}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
