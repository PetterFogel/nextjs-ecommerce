import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const errorPanelStyles = makeStyles()((theme: Theme) => ({
  root: {
    margin: "auto",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(1)
    }
  },
  errorPanel: {
    "&.css-1nmfsuj-MuiPaper-root-MuiAlert-root .MuiAlert-icon": {
      padding: theme.spacing(1.5, 0)
    },
    "&.css-1nmfsuj-MuiPaper-root-MuiAlert-root": {
      border: "1px solid #ddd"
    },
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  infoPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  link: {
    borderBottom: "1px solid #333"
  }
}));
