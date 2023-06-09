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
  itemInfoHolder: {
    flex: 3,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "2rem"
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
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));
