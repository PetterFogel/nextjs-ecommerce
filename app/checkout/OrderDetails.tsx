"use client";
import { FC } from "react";
import { PersonalInformation } from "./PersonalInformation";
import { ShippingSelectionPanel } from "./ShippingSelectionPanel";

export const OrderDetails: FC = () => {
  return (
    <>
      <ShippingSelectionPanel />
      <PersonalInformation />
    </>
  );
};
