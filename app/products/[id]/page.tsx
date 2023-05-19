import { IProduct } from "@/types/product";

async function fetchProduct(id: string): Promise<IProduct> {
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
  return (
    <>
      <h2>Details</h2>
    </>
  );
}

export default ProductItem;
