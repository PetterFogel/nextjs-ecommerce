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
import { FC } from "react";
import { IProduct } from "@/types/product";
import { AdminProductsItem } from "./AdminProductsItem";
import { adminPageStyles } from "./style/adminPageStyles";

interface Props {
  products: IProduct[];
}

export const AdminProductsList: FC<Props> = ({ products }) => {
  const { classes } = adminPageStyles();
  return (
    <main className={classes.root}>
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
              <AdminProductsItem key={product._id} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};
