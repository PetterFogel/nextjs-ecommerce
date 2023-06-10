import { FC } from "react";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";

export const EmptyCartPanel: FC = () => {
  const router = useRouter();

  return (
    <>
      <Typography variant="h3" mb={2}>
        Your cart is empty
      </Typography>
      <Button
        color="info"
        variant="contained"
        onClick={() => router.push("/products")}>
        Continue Shopping
      </Button>
    </>
  );
};
