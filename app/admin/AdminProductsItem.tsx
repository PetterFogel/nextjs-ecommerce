"use client";
import { FC } from "react";
import { IProduct } from "@/types/product";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/legacy/image";

interface Props {
  product: IProduct;
}

export const AdminProductsItem: FC<Props> = ({ product }) => {
  return (
    <TableRow>
      <TableCell style={{ width: "4rem", height: "4rem", padding: 8 }}>
        <Image
          src={product.imageUrl}
          alt={product.imageUrl}
          style={{ borderRadius: "100%" }}
          layout={"responsive"}
          height={"64"}
          width={"64"}
        />
      </TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell>{product.price} SEK</TableCell>
      <TableCell>{product.info.slice(0, 60)}...</TableCell>
      <TableCell>{product.rating}</TableCell>
      <TableCell>
        <Tooltip title={"Edit"} placement="top">
          <IconButton disabled>
            <EditIcon color="secondary" sx={{ cursor: "pointer" }} />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};
