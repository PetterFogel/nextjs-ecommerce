"use client";
import { FC } from "react";
import { IProduct } from "@/types/product";
import { Dialog, Typography } from "@mui/material";
import { ProductDialogForm } from "./AdminProductDialogForm";
import { adminPageStyles } from "./style/adminPageStyles";

interface Props {
  product?: IProduct;
  isDialogOpen: boolean;
  onDialogCloseClick: () => void;
}

export const ProductDialog: FC<Props> = ({
  product,
  isDialogOpen,
  onDialogCloseClick
}) => {
  const { classes } = adminPageStyles();
  return (
    <Dialog
      maxWidth="sm"
      open={isDialogOpen}
      onClose={onDialogCloseClick}
      fullWidth>
      <Typography variant="h3" className={classes.dialogHolder}>
        {product ? "Edit product" : "Add a product"}
      </Typography>
      <ProductDialogForm
        product={product}
        onDialogCloseClick={onDialogCloseClick}
      />
    </Dialog>
  );
};
