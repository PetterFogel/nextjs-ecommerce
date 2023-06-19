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

interface Props {
  formik: FormikValues;
}

export const ShippingSelection: FC<Props> = ({ formik }) => {
  const { classes } = checkoutPageStyles();
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
            formik.setFieldValue("shipping", event.currentTarget.value);
          }}>
          <Box className={classes.spaceBetween}>
            <FormControlLabel
              value="POSTNORD"
              control={<Radio />}
              label="Postnord"
            />
            <Typography variant="subtitle1">59 SEK</Typography>
          </Box>
          <Box className={classes.spaceBetween}>
            <FormControlLabel
              value="DHL"
              control={<Radio />}
              label="DHL Service point"
            />
            <Typography variant="subtitle1">39 SEK</Typography>
          </Box>
          <Box className={classes.spaceBetween}>
            <FormControlLabel
              value="BUDBEE"
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
