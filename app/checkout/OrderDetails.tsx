import { Typography } from "@mui/material";
import { FC } from "react";
import { PersonalInformation } from "./PersonalInformation";

export const OrderDetails: FC = () => {
  return (
    <>
      <Typography variant="h3">Order Details</Typography>
      <PersonalInformation />
    </>
  );
};
