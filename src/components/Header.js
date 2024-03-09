import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../images/Logo.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export function Header({ number, children }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box style={{ display: "flex" }}>
      <AppBar
        position="fixed"
        style={{
          height: "81px",
          backgroundColor: "#141122",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            margin: isSmallScreen ? "25x" : "40px",
            padding: "0 24px",
          }}
        >
          <KeyboardBackspaceIcon fontSize="large" />

          <img src={Logo} alt="Logo" style={{ height: "70px" }} />

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
              position: "relative",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              component="span"
              style={{
                backgroundClip: "text",
                position: "absolute",
                top: "2px",
                left: "4px",
              }}
              sx={{
                color: "transparent",
                fontWeight: "bold",
                background:
                  "linear-gradient(90deg, #8B7CF8 0%, #ED65F3 85.48%)",
              }}
            >
              {number}
            </Typography>
            <Divider
              sx={{
                width: "1px",
                height: "30px",
                backgroundColor: "white",
                transform: "rotate(45deg)",
              }}
            />
            <Typography
              variant="h6"
              component="span"
              style={{ position: "absolute", top: "26px", left: "20px" }}
              sx={{
                fontWeight: "bold",
              }}
            >
              8
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ minHeight: "calc(100vh - 81px)", marginTop: "81px" }}>
        {children}
      </div>
    </Box>
  );
}
