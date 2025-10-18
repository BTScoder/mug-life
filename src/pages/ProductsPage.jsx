import Products from "../components/Products";
const ProductsPage = ({
  categories,
  products,
  loading,
  toggleFavourite,
  addToCart,
}) => {
  return (
    <>
      <Products
        categories={categories}
        products={products}
        loading={loading}
        toggleFavourite={toggleFavourite}
        addToCart={addToCart}
      />
    </>
  );
};

export default ProductsPage;
