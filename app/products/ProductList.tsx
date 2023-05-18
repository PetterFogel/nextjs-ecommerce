"use client";

import { FC } from "react";
import { IProduct } from "@/types/product";
import { ProductItem } from "./ProductItem";
import { productPageStyles } from "./style/productPageStyles";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  const { classes } = productPageStyles();

  return (
    <section className={classes.root}>
      <div className={classes.listContainer}>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};
