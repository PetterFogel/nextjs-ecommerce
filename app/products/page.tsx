import { fetchData } from "@/utils/fetchData";
import { ProductList } from "@/common/components/ProductList";

const ProductsPage = async () => {
  const products = await fetchData("products");

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default ProductsPage;
