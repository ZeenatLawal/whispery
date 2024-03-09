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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box style={{ display: "flex" }}>
      <AppBar
        position="fixed"
        style={{
          height: isSmallScreen ? "107px" : "121px",
          backgroundColor: "#141122",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            margin: isSmallScreen ? "26px" : "40px 100px",
            padding: "0",
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
              variant="h4"
              component="span"
              style={{
                backgroundClip: "text",
                position: "absolute",
                top: "-2px",
                left: 0,
                fontWeight: 700,
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
                height: "45px",
                backgroundColor: "white",
                transform: "rotate(45deg)",
              }}
            />
            <Typography
              variant="h4"
              component="span"
              style={{
                position: "absolute",
                top: "35px",
                left: "22px",
                fontWeight: 700,
              }}
            >
              8
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <div
        style={{
          paddingTop: isSmallScreen ? "90px" : "120px",
          minHeight: `calc(100vh - ${isSmallScreen ? 107 : 121}px)`,
          margin: "81px auto 30px",
        }}
      >
        {children}
      </div>
    </Box>
  );
}
