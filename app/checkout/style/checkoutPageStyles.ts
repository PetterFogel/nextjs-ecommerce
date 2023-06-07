import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const checkoutPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    maxWidth: "950px",
    margin: "auto",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.5)
    }
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageHolder: {
    flex: 0.7,
    marginRight: theme.spacing(1)
  },
  quantityHolder: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flex: 1
  },
  closeIconHolder: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1
  }
}));
