import { fetchData } from "@/utils/fetchData";
import { ProductDetails } from "../ProductDetails";
import React from "react";

const ProductItem = async ({ params }: { params: { id: string } }) => {
  const product = await fetchData("/products", params.id);
  return <ProductDetails product={product} />;
};

export default ProductItem;
