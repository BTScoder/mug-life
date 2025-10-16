import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Main from "./components/MainPage";
function App() {
  const { data, loading, error } = useFetch("./data/products.json");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Initialize products when data is loaded
  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data?.products]);

  // Toggle favorite function - lives in App so it persists across routes
  const toggleFavourite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product,
      ),
    );
  };

  console.log(data);
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              categories={data?.categories}
              products={products}
              loading={loading}
              toggleFavourite={toggleFavourite}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              categories={data?.categories}
              loading={loading}
              toggleFavourite={toggleFavourite}
            />
          }
        />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}
export default App;
