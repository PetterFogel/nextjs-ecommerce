import { IProduct } from "@/types/product";
import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "@/common/components/ProductDetails";
import { Suspense } from "react";

export async function generateStaticParams() {
  const productsData: IProduct[] = await fetchData("products");

  const ids = productsData.map((p) => {
    return {
      params: {
        id: p._id
      }
    };
  });

  return ids;
}

async function ProductItem({ params }: { params: { id: string } }) {
  const product = await fetchData("products", params.id);
  if (!product) return;
  return (
    <Suspense fallback={<div></div>}>
      <ProductDetails product={product} />
    </Suspense>
  );
}

export default ProductItem;
