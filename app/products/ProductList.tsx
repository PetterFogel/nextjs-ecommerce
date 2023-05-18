"use client";
import { FC, useState } from "react";
import { IProduct } from "@/types/product";
import { ProductItem } from "./ProductItem";
import { productPageStyles } from "./style/productPageStyles";
import { filterProductsByCategory } from "@/common/functions/filterProductsByCategory";
import { sortProductsByPrice } from "@/common/functions/sortProductsByPrice";
import { ProductFilterPanel } from "./ProductFilterPanel";

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
