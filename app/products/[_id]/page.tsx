import { ProductDetails } from "@/common/components/ProductDetails";
import { IProduct } from "@/types/product";

type Props = {
  params: {
    _id: string;
  };
};

async function fetchData(id: string) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/products/${id}`
  );

  console.log("testingggggggg");

  return await response.json();
}

async function ItemDetails({ params }: Props) {
  const product: IProduct = await fetchData(params._id);

  if (!product) return;

  return (
    <section>
      <ProductDetails product={product} />
    </section>
  );
}

export default ItemDetails;
