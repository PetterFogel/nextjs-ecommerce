import { ProductDetails } from "@/common/components/ProductDetails";
import { Suspense } from "react";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/products/${id}`);
  return res.json();
}

async function ProductItem({ params: { id } }: { params: { id: string } }) {
  const productData = await getProduct(id);

  const product = await productData;

  return (
    <>
      <h2>{product.title}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails product={productData} />
      </Suspense>
    </>
  );
}

export default ProductItem;
