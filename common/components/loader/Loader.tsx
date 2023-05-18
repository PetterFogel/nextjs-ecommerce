"use client";
import { FC } from "react";
import { loaderStyles } from "./style/loaderStyle";
import { Box, Typography } from "@mui/material";

export const Loader: FC = () => {
  const { classes } = loaderStyles();

  return (
    <Box className={classes.root}>
      <Typography variant={"h2"}>Loading...</Typography>
    </Box>
  );
};
