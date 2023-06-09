import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const checkoutPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1)
    }
  },
  emptyPanelContainer: {
    maxWidth: "950px",
    margin: "auto"
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
  },
  priceInfoContainer: {
    float: "right",
    display: "flex",
    justifyContent: "space-between",
    width: "20rem",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  }
}));
