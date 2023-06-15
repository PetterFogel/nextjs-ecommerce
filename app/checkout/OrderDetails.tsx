"use client";
import { FC } from "react";
import { ShippingSelection } from "./ShippingSelection";
import { PersonalInformation } from "./PersonalInformation";

export const OrderDetails: FC = () => {
  return (
    <>
      <ShippingSelection />
      <PersonalInformation />
    </>
  );
};
