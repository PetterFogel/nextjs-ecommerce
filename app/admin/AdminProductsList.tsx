"use client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { IProduct } from "@/types/product";
import { FC, useState } from "react";
import { ProductDialog } from "./AdminProductDialog";
import { adminPageStyles } from "./style/adminPageStyles";
import { AdminFilterPanel } from "./AdminsFilterPanel";
import { AdminProductsItem } from "./AdminProductsItem";

interface Props {
  products: IProduct[];
}

const fetchProduct = async (productId: string | undefined) => {
  if (!productId) return undefined;
  const response = await fetch(`/api/products/${productId}`);
  return await response.json();
};

export const AdminProductsList: FC<Props> = ({ products }) => {
  const { classes } = adminPageStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [product, setProduct] = useState<IProduct | undefined>(undefined);

  const openDialogHandler = async (productId?: string) => {
    const product = await fetchProduct(productId);
    setProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialogHandler = () => {
    setProduct(undefined);
    setIsDialogOpen(false);
  };

  return (
    <main className={classes.root}>
      <AdminFilterPanel onDialogOpenClick={openDialogHandler} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Info</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <AdminProductsItem
                key={product._id}
                product={product}
                onDialogOpenClick={openDialogHandler}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isDialogOpen && (
        <ProductDialog
          product={product}
          isDialogOpen={isDialogOpen}
          onDialogCloseClick={closeDialogHandler}
        />
      )}
    </main>
  );
};
