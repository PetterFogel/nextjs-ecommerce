"use client";
import { FC } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import { FormikValues } from "formik";
import { checkoutPageStyles } from "./style/checkoutPageStyles";
import { useAppDispatch } from "@/redux/hooks";
import { checkoutSlice } from "@/redux/slices/checkout/cartSlice";

interface Props {
  formik: FormikValues;
}

export const ShippingSelection: FC<Props> = ({ formik }) => {
  const dispatch = useAppDispatch();
  const { classes } = checkoutPageStyles();
  const { setShippingAmount } = checkoutSlice.actions;

  return (
    <>
      <FormControl sx={{ width: "100%" }} error id="shipping">
        <Typography variant="h3" fontWeight={600}>
          Select shipping
        </Typography>
        <RadioGroup
          name="shipping"
          aria-labelledby="demo-radio-buttons-group-label"
          onChange={(event) => {
            console.log(event.currentTarget.value);
            dispatch(setShippingAmount(parseInt(event.currentTarget.value)));
            formik.setFieldValue("shipping", event.currentTarget.value);
          }}>
          <Box className={classes.spaceBetween}>
            <FormControlLabel value="59" control={<Radio />} label="Postnord" />
            <Typography variant="subtitle1">59 SEK</Typography>
          </Box>
          <Box className={classes.spaceBetween}>
            <FormControlLabel
              value="39"
              control={<Radio />}
              label="DHL Service point"
            />
            <Typography variant="subtitle1">39 SEK</Typography>
          </Box>
          <Box className={classes.spaceBetween}>
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="Budbee Box"
            />
            <Typography variant="subtitle1">0 SEK</Typography>
          </Box>
        </RadioGroup>
        {formik.touched.shipping && formik.errors.shipping && (
          <FormHelperText error>{formik.errors.shipping}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};
