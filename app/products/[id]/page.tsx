import { IProduct } from "@/types/product";
import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "./ProductDetails";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const products: IProduct[] = await fetchData("products");

  return products.map((p) => ({
    id: p._id
  }));
}

const ProductItem = async ({ params }: Props) => {
  const product = await fetchData("products", params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
};

export default ProductItem;
