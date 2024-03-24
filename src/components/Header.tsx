import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
  Grid,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ReactNode } from "react";
import MobileBg from "../assets/starryBgMobile.png";
import DesktopBg from "../assets/starryBgDesktop.png";

export function Header({
  pageNumber,
  children,
  path,
}: {
  pageNumber?: number;
  children: ReactNode;
  path?: string;
}) {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const backgroundImage =
    (location.pathname === "/message" || location.pathname === "/summary") &&
    isSmallScreen
      ? `url(${MobileBg})`
      : location.pathname === "/summary" && !isSmallScreen
      ? `url(${DesktopBg})`
      : "none";

  return (
    <Box
      style={{
        display: "flex",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#141122",
      }}
    >
      <AppBar
        position="fixed"
        style={{
          height: isSmallScreen ? "107px" : "121px",
          background: "inherit",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            justifyContent: path && pageNumber ? "space-between" : "center",
            margin: isSmallScreen ? "26px" : "40px 100px",
            padding: "0",
          }}
        >
          {path && (
            <IconButton
              sx={{ color: "white", padding: 0 }}
              onClick={() => {
                navigate(path);
              }}
            >
              <KeyboardBackspaceIcon fontSize="large" />
            </IconButton>
          )}

          <img src={Logo} alt="Logo" style={{ height: "70px" }} />

          {pageNumber && (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px",
                position: "relative",
                height: "100%",
                top: "-10px",
              }}
            >
              <Typography
                style={{
                  backgroundClip: "text",
                  position: "absolute",
                  top: "-2px",
                  left: 0,
                  fontWeight: 700,
                  fontSize: "32px",
                }}
                sx={{
                  color: "transparent",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(90deg, #8B7CF8 0%, #ED65F3 85.48%)",
                }}
              >
                {pageNumber}
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
                style={{
                  position: "absolute",
                  left: "18px",
                  fontWeight: 700,
                  top: "32px",
                  fontSize: "32px",
                }}
              >
                8
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Grid
        container
        width={{ xs: "calc(100vw - 50px)", md: "calc(100vw - 200px)" }}
        minHeight="calc(100vh - 107px)"
        paddingTop={{ xs: "45px", md: "70px" }}
        margin="108px auto 0px"
      >
        {children}
      </Grid>
    </Box>
  );
}
