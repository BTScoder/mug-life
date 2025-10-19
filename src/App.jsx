import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import useFetch from "./hooks/useFetch";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./components/Cart";
import Details from "./components/Details";
import { CartProvider } from "./context/CartContext";

function App() {
  const { data, loading, error } = useFetch("/data/products.json");
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  useEffect(() => {
    if (data?.products) {
      setProducts(data?.products);
    }
  }, [data?.products]);

  const toggleFavourite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product,
      ),
    );
  };

  // console.log(cart);
  return (
    <div className="App overflow-x-hidden lg:grid lg:grid-cols-[260px_1fr_1fr]">
      <CartProvider>
        <div className="lg:max-w-sm">
          <NavBar />
        </div>
        <div className="lg:col-span-2">
          <Routes>
            {/* Home Route - Compose components directly here */}
            <Route
              path="/"
              element={
                <div className="w-full">
                  <Hero />
                  <Features />
                  <ProductsPage
                    categories={data?.categories}
                    products={products}
                    loading={loading}
                    toggleFavourite={toggleFavourite}
                  />
                </div>
              }
            />

            {/* Products Route - Just Products component */}
            <Route
              path="/products"
              element={
                <ProductsPage
                  categories={data?.categories}
                  products={products}
                  loading={loading}
                  toggleFavourite={toggleFavourite}
                />
              }
            />

            {/* Cart Route */}
            <Route path="/cart" element={<Cart />} />
            {/* Details Route */}
            <Route
              path="/details/:id"
              element={
                <Details
                  products={products}
                  toggleFavourite={toggleFavourite}
                />
              }
            />
            {/* <Route
              path="products/details/:id"
              element={<Details products={products} />}
            /> */}
          </Routes>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
