"use client";
import { IProduct } from "@/types/product";
import { shoeSizes } from "@/common/constants/shoeSizes";
import { FC, useState } from "react";
import { Button, Divider, Rating, Stack, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { productPageStyles } from "@/app/products/style/productPageStyles";

interface Props {
  product: IProduct;
}

export const ProductDetails: FC<Props> = ({ product }) => {
  const { classes } = productPageStyles();
  const [sizeValue, setSizeValue] = useState(shoeSizes[0]);

  const sizeSelectHandler = (size: number) => setSizeValue(size.toString());

  return (
    <div className={classes.detailsRoot}>
      <Image
        className={classes.detailsImageStyle}
        src={product.imageUrl}
        alt={product.imageUrl}
        priority={true}
        layout="responsive"
        width={"500"}
        height={"610"}
      />
      <div className={classes.detailsInfo}>
        <Typography variant={"h3"}>{product.title}</Typography>
        <Typography variant={"h3"}>{product.price} SEK</Typography>
        <Stack spacing={1}>
          <Rating
            readOnly
            size="small"
            precision={0.5}
            defaultValue={2.5}
            sx={{ color: "#333" }}
          />
        </Stack>
        <Divider sx={{ margin: 0 }} />
        <div>
          <Typography variant={"subtitle1"} mb={0.5}>
            Size
          </Typography>
          <div className={classes.sizes}>
            {shoeSizes.map((size, index) => (
              <div
                key={index}
                className={
                  size === sizeValue ? classes.activeSize : classes.size
                }
                onClick={() => sizeSelectHandler(parseInt(size))}>
                <p>{size}</p>
              </div>
            ))}
          </div>
        </div>
        <Divider sx={{ margin: 0 }} />
        <Button
          disabled={product.sizes.length === 0}
          variant="contained"
          color="success"
          size="large"
          // onClick={() =>
          //   addToCartHandler({ ...product, size: parseInt(sizeValue) })
          // }
        >
          Add to cart
        </Button>
        <Divider sx={{ margin: 0 }} />
        <div>
          <Typography variant={"subtitle1"} mb={0.5}>
            Product info
          </Typography>
          <Typography variant={"subtitle2"}>{product.info}</Typography>
        </div>
      </div>
    </div>
  );
};
