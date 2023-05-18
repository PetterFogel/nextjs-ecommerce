import { FC } from "react";
import { IProduct } from "@/types/product";
import { Typography } from "@mui/material";
import { productPageStyles } from "./style/productPageStyles";
import Image from "next/image";

interface Props {
  product: IProduct;
}
export const ProductItem: FC<Props> = ({ product }) => {
  const { classes } = productPageStyles();

  return (
    <div>
      <Image
        alt={product.title}
        src={product.imageUrl}
        className={classes.listImage}
        layout="intrinsic"
        width={"400"}
        height={"610"}
      />
      <Typography variant="h4" mb={0.2} sx={{ cursor: "pointer" }}>
        {product.title}
      </Typography>
      <Typography variant="h5">{product.price + " SEK"}</Typography>
    </div>
  );
};
