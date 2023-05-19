import { ProductDetails } from "@/common/components/ProductDetails";
import { IProduct } from "@/types/product";

type Props = {
  params: {
    id: string;
  };
};

async function fetchData(id: string) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/products/${id}`,
    {
      cache: "no-store"
    }
  );

  console.log("testingggggggg");

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
  return await response.json();
}

async function ItemDetails({ params }: Props) {
  const product: IProduct = await fetchData(params.id);

  if (!product) return;

  return (
    <section>
      <ProductDetails product={product} />
    </section>
  );
}

export default ItemDetails;
