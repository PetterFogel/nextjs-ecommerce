"use client";
import { ReactNode } from "react";
import { theme } from "@/styles/base";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

type Props = {
  children: ReactNode;
};

export const createEmotionCache = () => {
  return createCache({ key: "css" });
};

export const MuiProvider = ({ children }: Props) => {
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};
