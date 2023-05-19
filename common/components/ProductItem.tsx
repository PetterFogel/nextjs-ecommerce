import { FC } from "react";
import { IProduct } from "@/types/product";
import { Typography } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import { productPageStyles } from "./style/productPageStyles";

interface Props {
  product: IProduct;
}
export const ProductItem: FC<Props> = ({ product }) => {
  const { classes } = productPageStyles();

  return (
    <Link href={`/products/${product._id}`}>
      <Image
        alt={product.title}
        src={product.imageUrl}
        className={classes.listImage}
        priority={true}
        layout="responsive"
        width={"400"}
        height={"610"}
      />
      <Typography variant="h4" mt={0.5} sx={{ cursor: "pointer" }}>
        {product.title}
      </Typography>
      <Typography variant="h4">{product.price + " SEK"}</Typography>
    </Link>
  );
};
