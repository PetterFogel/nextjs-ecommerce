import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const adminPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "auto",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  }
}));
