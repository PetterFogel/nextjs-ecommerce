import { IProduct } from "@/types/product";
import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "../ProductDetails";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const products: IProduct[] = await fetchData("products");

  return products.map((p) => ({
    id: p._id
  }));
}

async function fetchProducts(id: string) {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASEURL}/api/products/${id}`,
    {
      next: {
        revalidate: 60
      }
    }
  );
  const product = await response.json();
  return product;
}

const ProductItem = async ({ params }: Props) => {
  const product = await fetchProducts(params.id);
  return <ProductDetails product={product} />;
};

export default ProductItem;
