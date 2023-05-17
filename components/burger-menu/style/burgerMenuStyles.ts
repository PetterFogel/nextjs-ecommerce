import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const burgerMenuStyles = makeStyles()((theme: Theme) => ({
  burgerContainer: {
    display: "none",
    cursor: "pointer",
    marginLeft: "0.5rem",
    [theme.breakpoints.down("lg")]: {
      display: "block"
    }
  },
  burgerBar: {
    background: "#333",
    margin: "0.3rem",
    width: "2.2rem",
    height: "0.2rem",
    transition: "all 300ms ease"
  }
}));
