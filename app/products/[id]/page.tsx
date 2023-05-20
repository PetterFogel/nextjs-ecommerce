import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "@/common/components/ProductDetails";

const ProductItem = async ({ params }: { params: { id: string } }) => {
  const product = await fetchData(params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
};

export default ProductItem;
