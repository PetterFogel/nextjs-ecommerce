import { ProductDetails } from "@/common/components/ProductDetails";
import { IProduct } from "@/types/product";
import { fetchData } from "@/utils/fetchData";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const products: IProduct[] = await fetchData("products");

  return products.map((p) => ({
    id: p._id
  }));
}

async function ItemDetails({ params }: Props) {
  const product = await fetchData("products", params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
}

export default ItemDetails;
