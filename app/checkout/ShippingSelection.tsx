"use client";
import { FC } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";

export const ShippingSelection: FC = () => {
  return (
    <>
      <FormControl sx={{ width: "100%" }}>
        <Typography variant="subtitle1">Select shipping</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <FormControlLabel
              value="POSTNORD"
              control={<Radio />}
              label="Postnord"
            />
            <Typography variant="subtitle1">59 SEK</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <FormControlLabel
              value="DHL"
              control={<Radio />}
              label="DHL Service point"
            />
            <Typography variant="subtitle1">39 SEK</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <FormControlLabel
              value="BUDBEE"
              control={<Radio />}
              label="Budbee Box"
            />
            <Typography variant="subtitle1">0 SEK</Typography>
          </Box>
        </RadioGroup>
      </FormControl>
    </>
  );
};
