"use client";
import { IProduct } from "@/types/product";
import { ProductItem } from "./ProductItem";
import { FC, useState } from "react";
import { productPageStyles } from "./style/productPageStyles";
import { ProductFilterPanel } from "./ProductFilterPanel";
import { sortProductsByPrice } from "@/common/functions/sortProductsByPrice";
import { filterProductsByCategory } from "@/common/functions/filterProductsByCategory";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  const { classes } = productPageStyles();
  const [categoryValue, setCategoryValue] = useState("ALL");
  const [value, setValue] = useState<string | null>(null);

  const categoryFilterHandler = (category: string) =>
    setCategoryValue(category);

  const sortPriceHandler = (value: string | null) => setValue(value);

  const filteredData = filterProductsByCategory(products, categoryValue);
  const sortedProducts = sortProductsByPrice(filteredData, value);

  return (
    <section className={classes.root}>
      <ProductFilterPanel
        onCategoryFilterChange={categoryFilterHandler}
        onPriceSortChange={sortPriceHandler}
      />
      <div className={classes.listContainer}>
        {sortedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};
