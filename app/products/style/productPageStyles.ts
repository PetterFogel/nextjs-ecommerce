import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const productPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    maxWidth: "1400px",
    margin: "auto",
    padding: theme.spacing(2)
  },
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: theme.spacing(2),
    gap: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)"
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(1)
    }
  },
  listImage: {
    width: "100%",
    cursor: "pointer"
  }
}));
