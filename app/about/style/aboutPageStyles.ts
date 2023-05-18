import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const aboutPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    maxWidth: "1000px",
    margin: "auto",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  },
  contentRow: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: theme.spacing(1)
    }
  },
  contentInfo: {},
  contentHolder: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0)
    }
  }
}));
