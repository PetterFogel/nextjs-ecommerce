"use client";
import { FC } from "react";
import { ShippingSelection } from "./ShippingSelection";
import { PersonalInformation } from "./PersonalInformation";
import { Stack } from "@mui/material";

export const OrderDetails: FC = () => {
  return (
    <Stack direction="column" spacing={2}>
      <ShippingSelection />
      <PersonalInformation />
    </Stack>
  );
};
