import { ProductDetails } from "@/common/components/ProductDetails";

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
}

async function ProductItem({ params: { id } }: { params: { id: string } }) {
  const product = await getProduct(id);
  if (!product) return;
  return (
    <>
      <h2>{product.title}</h2>
      <ProductDetails product={product} />
    </>
  );
}

export default ProductItem;
