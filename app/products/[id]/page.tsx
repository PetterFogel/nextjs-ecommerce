import { ProductDetails } from "@/common/components/ProductDetails";

type Props = {
  params: {
    id: string;
  };
};

async function fetchData(id: string) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/products/${id}`,
    {
      cache: "force-cache"
    }
  );

  return await response.json();
}

async function ItemDetails({ params }: Props) {
  const product = await fetchData(params.id);
  return (
    <section>
      <ProductDetails product={product} />
    </section>
  );
}

export default ItemDetails;
