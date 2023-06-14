"use client";
import { FC } from "react";
import { Box } from "@mui/material";
import { productPageStyles } from "@/app/products/style/productPageStyles";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonProductList: FC = () => {
  const { classes } = productPageStyles();
  return (
    <Box className={classes.root} style={{ marginTop: 30 }}>
      <Box className={classes.listContainer}>
        {Array.from(new Array(8)).map((_, index) => (
          <Box sx={{ pt: 0.5 }} key={index}>
            <Skeleton variant="rectangular" height={400} />
            <Skeleton />
            <Skeleton width="30%" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
