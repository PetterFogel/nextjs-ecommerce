import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', 'sans-serif'",
    h1: {
      fontSize: "clamp(2rem, 8vw, 4rem)",
      fontWeight: 600,
      color: "#333",
      letterSpacing: "4px"
    },
    h2: {
      fontSize: "clamp(1.5rem, 6vw, 2rem)",
      fontWeight: 400,
      color: "#333",
      letterSpacing: "1px"
    },
    h3: {
      fontWeight: 400,
      color: "#333",
      textAlign: "left",
      letterSpacing: "1px",
      fontSize: "clamp(1.2rem, 4vw, 1.5rem)"
    },
    h4: {
      fontWeight: 600,
      color: "#333",
      letterSpacing: "1px",
      fontSize: "clamp(0.5rem, 2vw, 0.8rem)"
    },
    h5: {
      fontWeight: 400,
      color: "#333",
      fontSize: "clamp(0.6rem, 2vw, 0.9rem)"
    },
    subtitle1: {
      color: "#333",
      letterSpacing: "0.5px",
      fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
      fontWeight: 600
    },
    subtitle2: {
      color: "#333",
      letterSpacing: "0.5px",
      fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
      fontWeight: 400
    }
  },
  spacing: 10,
  palette: {
    primary: {
      main: "#333"
    },
    secondary: {
      main: "#A4A4A4"
    },
    warning: {
      main: "#F9C70C"
    },
    info: {
      main: "#fff"
    },
    success: {
      main: "#00ffa2"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      variants: [
        {
          props: { variant: "text" },
          style: { fontWeight: 600, letterSpacing: "1px", borderRadius: "0px" }
        },
        {
          props: { variant: "contained" },
          style: {
            fontWeight: 600,
            letterSpacing: "1px",
            borderRadius: "0px",
            background: "#222",
            color: "#fff"
          }
        },
        {
          props: { variant: "outlined" },
          style: {
            fontWeight: 600,
            letterSpacing: "1px",
            borderRadius: "0px",
            background: "#fff",
            color: "#333",
            border: "1px solid #333"
          }
        }
      ]
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: "head" },
          style: {
            fontSize: "0.9rem",
            fontWeight: 600,
            "@media (max-width:900px)": {
              fontSize: "0.8rem",
              fontWeight: 500
            }
          }
        },
        {
          props: { variant: "body" },
          style: {
            fontSize: "0.8rem"
          }
        }
      ]
    },
    MuiSvgIcon: {
      styleOverrides: { root: { cursor: "pointer" } }
    },
    MuiDivider: {
      styleOverrides: { root: { margin: "15px 0px", background: "#ddd" } }
    }
  }
});
