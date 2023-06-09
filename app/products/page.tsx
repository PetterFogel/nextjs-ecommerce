import { fetchData } from "@/utils/fetchData";
import { ProductList } from "./ProductList";

const ProductsPage = async () => {
  const products = await fetchData("products");

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default ProductsPage;
