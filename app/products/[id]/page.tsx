import { ProductDetails } from "@/common/components/ProductDetails";
import { fetchData } from "@/utils/fetchData";

const ProductItem = async ({ params }: { params: { id: string } }) => {
  const product = await fetchData("products", params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
};

export default ProductItem;
