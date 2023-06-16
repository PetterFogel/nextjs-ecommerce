import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const checkoutPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    margin: theme.spacing(5, 0),
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 1.5),
      margin: theme.spacing(2, 0)
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
    flex: 1,
    marginRight: theme.spacing(1)
  },
  quantityHolder: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    flex: 0.75
  },
  closeIconHolder: {
    display: "flex",
    justifyContent: "flex-end",
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
