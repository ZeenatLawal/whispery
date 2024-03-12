import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BookOwner } from "./Pages/BookOwner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FamilyMembers } from "./Pages/FamilyMembers";
import { PersonalEvents } from "./Pages/PersonalEvents";
import { ChooseTheme } from "./Pages/ChooseTheme";

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
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: "#0D0B22",
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          marginBottom: "8px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookOwner />} />
          <Route path="/members" element={<FamilyMembers />} />
          <Route path="/events" element={<PersonalEvents />} />
          <Route path="/themes" element={<ChooseTheme />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
