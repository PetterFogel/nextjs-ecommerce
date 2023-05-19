import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "../ProductDetails";

interface Props {
  params: { id: string };
}

const ProductItem = async ({ params }: Props) => {
  const product = await fetchData("products", params.id);
  return <ProductDetails product={product} />;
};

export default ProductItem;
