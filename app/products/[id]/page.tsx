import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "@/common/components/ProductDetails";
import { IProduct } from "@/types/product";

interface Props {
  params: { id: string };
}

export const generateStaticParams = async () => {
  const products: IProduct[] = await fetchData("products");

  return products.map((p) => ({
    id: p._id
  }));
};

const ProductItem = async ({ params }: Props) => {
  const product = await fetchData(params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
};

export default ProductItem;
