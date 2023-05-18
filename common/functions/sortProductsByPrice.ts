import { IProduct } from "@/types/product";

export const sortProductsByPrice = (
  products: IProduct[],
  sortValue: string | null
) => {
  const sortedProducts =
    sortValue === "ASC"
      ? products.slice().sort((a, b) => a.price - b.price)
      : products.slice().sort((a, b) => b.price - a.price);

  return sortValue === null ? products : sortedProducts;
};
