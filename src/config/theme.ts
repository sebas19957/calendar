import { createTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export default createTheme({
  palette: {
    primary: {
      main: "#5c6bc0",
      contrastText: "#FFF",
      100: "#FFC676",
      200: "#F1AE6C",
      300: "#E29662",
      400: "#D47D57",
      500: "#BE5948",
      600: "#B0413E",
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: 10,
      },
    },
    MuiButton: {
      root: {
        textTransform: "inherit",
        outline: "none",
        fontFamily: "Raleway",
        "&.raleway": {
          fontWeight: "bold",
        },
        "&.bold": {
          fontWeight: "bold",
        },
        "&.view": {
          color: "#FFF",
          background: grey[600],
          borderRadius: 50,
          padding: "1.6px 0",
          "&:hover": {
            background: grey[700],
            color: "#FFF",
          },
        },
      },
      outlined: {
        borderWidth: 2,
        borderRadius: 50,
      },
      outlinedPrimary: {
        borderWidth: 2,
        padding: "8px 20px",
        "&:hover": {
          color: "#5c6bc0",
          borderWidth: 2,
        },
      },
      contained: {
        boxShadow: "none",
        borderRadius: 50,
      },
      containedPrimary: {
        padding: "8px 20px",
        "&:hover": {
          color: "#FFF",
        },
      },
    },
    MuiInputLabel: {
      outlined: {},
    },
    MuiOutlinedInput: {
      marginDense: {
        borderRadius: 50,
        overflow: "hidden",
      },
    },
    MuiTable: {
      root: {
        "&.table-agent, &.table-present": {
          "&:not(.table-present) .MuiTableRow-root:nth-child(odd)": {
            background: "rgba(0, 0, 0, 0.02)",
          },
          "& .MuiTableCell-root": {
            fontSize: 14,
            borderBottom: "none",
            color: "#AFAFAF",
          },
        },
      },
    },
    MuiTableCell: {
      root: {
        padding: 10,
      },
      head: {
        color: "#AFAFAF",
        fontWeight: "bold",
        fontSize: 14,
      },
    },
    MuiAvatar: {
      circle: {
        backgroundColor: "#DD9835",
      },
    },
  },
});