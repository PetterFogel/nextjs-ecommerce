"use client";
import { FC } from "react";
import { Skeleton } from "@mui/lab";
import { Divider } from "@mui/material";
import { productPageStyles } from "@/app/products/style/productPageStyles";

export const SkeletonProductDetails: FC = () => {
  const { classes } = productPageStyles();

  return (
    <div className={classes.detailsRoot}>
      <Skeleton variant="rectangular" height={600} />
      <div className={classes.detailsInfo}>
        <Skeleton />
        <Skeleton width="35%" />
        <Skeleton width="23%" />
        <Divider sx={{ margin: 0 }} />
        <div>
          <div className={classes.sizes}>
            {Array.from(new Array(10)).map((_, index) => (
              <Skeleton key={index} height={50} width={65} />
            ))}
          </div>
        </div>
        <Divider sx={{ margin: 0 }} />
        <Skeleton height={70} width={405} />
        <Divider sx={{ margin: 0 }} />
        <div>
          <Skeleton width="23%" />
          <Skeleton />
          <Skeleton />
          <Skeleton width="75%" />
        </div>
      </div>
    </div>
  );
};
