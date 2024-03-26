import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BookOwner } from "./Pages/BookOwner";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { FamilyMembers } from "./Pages/FamilyMembers";
import { PersonalEvents } from "./Pages/PersonalEvents";
import { ChooseTheme } from "./Pages/ChooseTheme";
import { PersonalMessage } from "./Pages/PersonalMessage";
import { Summary } from "./Pages/Summary";
import { Animation } from "./Pages/Animation";
import { BookTypes } from "./Pages/BookTypes";
import { BookPurchase } from "./Pages/BookPurchase";
import { LoginPage } from "./Pages/LoginPage";
import { useCookie } from "./hooks/useCookie";
import { ReactNode, useEffect } from "react";

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

function ScrollToTop({ children }: { children: ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return <>{children}</>;
}

function App() {
  const [loggedIn, setLoggedIn] = useCookie<boolean>("loggedIn", false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loggedIn ? (
                    <BookOwner />
                  ) : (
                    <LoginPage setLoggedIn={setLoggedIn} />
                  )}
                </>
              }
            />
            <Route path="/members" element={<FamilyMembers />} />
            <Route path="/events" element={<PersonalEvents />} />
            <Route path="/themes" element={<ChooseTheme />} />
            <Route path="/message" element={<PersonalMessage />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/bookTypes" element={<BookTypes />} />
            <Route path="/bookPurchase" element={<BookPurchase />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
