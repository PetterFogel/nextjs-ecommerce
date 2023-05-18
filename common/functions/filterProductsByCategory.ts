import { IProduct } from "@/types/product";
import { Categories } from "../constants/enums";

export const filterProductsByCategory = (
  products: IProduct[],
  category: string
) => {
  return category === Categories.ALL
    ? products
    : products.filter((p) => p.category == category);
};
