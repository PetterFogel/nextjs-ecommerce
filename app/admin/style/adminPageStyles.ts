import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const adminPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "auto",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  },
  filterPanel: {
    alignSelf: "flex-end",
    marginBottom: theme.spacing(2)
  },
  addDialogButtonHolder: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%"
    }
  },
  editDialogButtonHolder: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%"
    }
  },
  actionButton: {
    width: "7rem",
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    }
  }
}));
