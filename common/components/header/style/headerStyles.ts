import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const headerPageStyles = makeStyles()((theme: Theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2.5),
    width: "100%",
    height: "6vh",
    position: "sticky",
    top: 0,
    zIndex: 99,
    background: "#fff",
    borderBottom: "1px solid #ddd",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 1.5)
    }
  },
  logo: {
    fontWeight: 400,
    color: "#333",
    textAlign: "left",
    letterSpacing: "1px",
    fontSize: "clamp(1.2rem, 4vw, 1.5rem)"
  },
  nav: {
    display: "flex",
    alignItems: "center"
  },
  ul: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    [theme.breakpoints.down("lg")]: {
      position: "fixed",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      background: "#fff",
      zIndex: 200,
      height: "94vh",
      top: "6vh",
      transition: "right 500ms ease-in"
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      right: "-100%"
    }
  },
  cartLink: {
    letterSpacing: "1px",
    fontSize: "0.9rem",
    color: "#333",
    paddingLeft: theme.spacing(1)
  },
  link: {
    letterSpacing: "1px",
    fontSize: "0.9rem",
    color: "#333",
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.3rem",
      margin: "1rem 0rem"
    }
  }
}));
