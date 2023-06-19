"use client";
import { FC } from "react";
import { ShippingSelection } from "./ShippingSelection";
import { PersonalInformation } from "./PersonalInformation";
import { Stack } from "@mui/material";
import { IPersonalInformation } from "@/types/personalInformation";
import { personalInfoValidator } from "./helpers/personalInfoValidator";
import { useFormik } from "formik";

export const OrderDetails: FC = () => {
  const validate = (values: IPersonalInformation) =>
    personalInfoValidator(values);

  const formik = useFormik({
    initialValues: {
      email: "",
      postalCode: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      phone: ""
    },
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: async (values) => {
      console.log(values);
    }
  });
  return (
    <Stack direction="column" spacing={2}>
      <ShippingSelection />
      <PersonalInformation formik={formik} />
    </Stack>
  );
};
