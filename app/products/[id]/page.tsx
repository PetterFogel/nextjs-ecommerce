import { ProductDetails } from "@/common/components/ProductDetails";

async function fetchProduct(id: string) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/products/${id}`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const contents = await response.json();
  return contents;
}

async function ProductItem({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
}

export default ProductItem;
