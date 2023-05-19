import { ProductDetails } from "@/common/components/ProductDetails";
import { IProduct } from "@/types/product";
import { fetchData } from "@/utils/fetchData";

type Props = {
  params: {
    id: string;
  };
};

async function EditPost({ params }: Props) {
  const product: IProduct = await fetchData("products", params.id);

  if (!product) return;

  return (
    <section>
      <ProductDetails product={product} />
    </section>
  );
}

export default EditPost;
