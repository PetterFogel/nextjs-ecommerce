import { ProductList } from "@/common/components/ProductList";
import { fetchData } from "../utils/fetchData";

const ProductsPage = async () => {
  const products = await fetchData("products");

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default ProductsPage;
