import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "@/common/components/ProductDetails";

async function ProductItem({ params }: { params: { id: string } }) {
  const product = await fetchData("products", params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
}

export default ProductItem;
