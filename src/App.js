import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BookOwner } from "./Pages/BookOwner";

const formBlack = "#131030CF";
const formBorder = "#5256A9A6";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    allVariants: {
      color: "#fff",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: formBlack,
            color: "#7c88a3",

            "& fieldset": {
              borderColor: formBorder,
            },
            "&:hover fieldset": {
              borderColor: formBorder,
            },
            "&.Mui-focused fieldset": {
              borderColor: formBorder,
            },
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiSelect-outlined": {
            backgroundColor: formBlack,
            color: "#7c88a3",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: formBorder,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: formBorder,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: formBorder,
          },
        },
        icon: {
          color: "#667085",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BookOwner />
    </ThemeProvider>
  );
}

export default App;
