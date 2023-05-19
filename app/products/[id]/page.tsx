import { ProductDetails } from "@/common/components/ProductDetails";
import { IProduct } from "@/types/product";
import { fetchData } from "@/utils/fetchData";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const post = await fetchData("products", id);

  if (!post) return {};

  return {
    title: post.title
  };
}

export async function generateStaticParams() {
  const products: IProduct[] = await fetchData("products");

  return products.map((p) => ({
    id: p._id
  }));
}

async function EditPost({ params }: Props) {
  const { id } = params;
  console.log(id);

  const product: IProduct = await fetchData("products", id);

  if (!product) return;

  return (
    <section>
      <ProductDetails product={product} />
    </section>
  );
}

export default EditPost;
