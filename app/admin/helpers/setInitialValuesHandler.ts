import { IProduct } from "@/types/product";

export const setInitialValuesHandler = (
  product: IProduct | undefined
): IProduct => {
  return {
    title: product ? product.title : "",
    imageUrl: product ? product.imageUrl : "",
    category: product ? product.category : "",
    info: product ? product.info : "",
    sizes: product ? product.sizes : [],
    price: product ? product.price : 0,
    rating: product ? product.rating : 0
  };
};
