import { ProductDetails } from "@/common/components/ProductDetails";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.API_BASE_URL}/api/products/${id}`);
  return res.json();
}

const ProductItem = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);
  if (!product) return;
  return <ProductDetails product={product} />;
};

export default ProductItem;
