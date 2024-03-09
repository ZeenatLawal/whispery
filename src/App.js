import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BookOwner } from "./Pages/BookOwner";

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
            backgroundColor: "#131030CF",
            "& fieldset": {
              borderColor: "#5256A9A6",
            },
            "&:hover fieldset": {
              borderColor: "#5256A9A6",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5256A9A6",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "#7c88a3",
          },
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
