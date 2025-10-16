import { useState, useMemo } from "react";

import { Coffee } from "lucide-react";
import SearchBar from "./Search";
import Card from "./Card";
const Products = ({ products, categories, loading, toggleFavourite }) => {
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
      {/* <div className="mx-auto flex max-w-lg items-center justify-center gap-3">
        <Coffee className="text-dark-brown mb-2 h-12 w-12" />
        <p className="font-extra-light text-center text-3xl">Our Products</p>
      </div> */}
      {/* Filter */}
      <div className="mx-auto my-10 max-w-3xl text-center">
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="mx-auto mt-10 flex max-w-lg items-center justify-between">
          {categories &&
            categories?.map((category) => (
              <p
                key={category.id}
                className={`hover:border-dark-brown cursor-pointer transition duration-75 ease-in hover:border-b-2 ${filter === category.name ? "border-dark-brown border-b-2 pb-3 transition-all duration-150 ease-in" : ""}`}
                onClick={() => setFilter(category.name)}
              >
                {category.name}
              </p>
            ))}
        </div>
      </div>
      {/* Product Cards */}
      <div className="mt-5 grid grid-cols-1 place-items-center gap-20 p-10 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((product) => (
          <Card
            key={product.name}
            image={product.image}
            altText={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
            id={product.id}
            favorite={product.isFavorite}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
