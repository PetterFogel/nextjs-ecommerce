"use client";
import { FC } from "react";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { IOrderDetails } from "@/types/orderDetails";
import { ShippingSelection } from "./ShippingSelection";
import { PersonalInformation } from "./PersonalInformation";
import { personalInfoValidator } from "./helpers/personalInfoValidator";
import { orderDetailsState } from "@/common/constants/orderDetailtsState";

export const OrderDetails: FC = () => {
  const validate = (values: IOrderDetails) => personalInfoValidator(values);

  const formik = useFormik({
    initialValues: orderDetailsState,
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: async (values: IOrderDetails) => {
      console.log(values);
    }
  });
  return (
    <Stack direction="column" spacing={2}>
      <ShippingSelection formik={formik} />
      <PersonalInformation formik={formik} />
    </Stack>
  );
};
