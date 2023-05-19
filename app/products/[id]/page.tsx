import { fetchData } from "@/app/utils/fetchData";
import { ProductDetails } from "@/common/components/ProductDetails";
import { IProduct } from "@/types/product";

export async function generateStaticParams() {
  const products: IProduct[] = await fetchData("products");

  return products.map((p) => ({
    id: p._id
  }));
}

const ProductItem = async ({ params }: { params: { id: string } }) => {
  const product = await fetchData("products", params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
};

export default ProductItem;
