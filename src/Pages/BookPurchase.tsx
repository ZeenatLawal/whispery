import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Logo from "../assets/logo.png";
import BookDesktop from "../assets/bookDesktop.png";
import BookMobile from "../assets/bookMobile.png";

export function BookPurchase() {
  const theme = useTheme();
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      style={{
        display: "flex",
        backgroundImage: isSmallScreen
          ? `url(${BookMobile})`
          : `url(${BookDesktop})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundColor: "#0D0B22",
        width: "100%",
        height: "100vh",
      }}
    >
      <AppBar
        position="fixed"
        style={{
          background: "none",
          alignItems: "center",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            marginTop: isSmallScreen ? "26px" : "52px",
          }}
        >
          <img src={Logo} alt="Logo" style={{ height: "70px" }} />
        </Toolbar>
      </AppBar>

      <Grid
        container
        alignContent="center"
        justifyContent="center"
        width={{ xs: "calc(100vw - 50px)", md: "calc(100vw - 200px)" }}
        minHeight="calc(100vh - 125px)"
        margin={
          isSmallest ? "0 auto" : { xs: "-90px auto 0", md: "125px 326px 0px" }
        }
      >
        <Grid item display="flex" flexDirection="column" alignItems="center">
          <Typography
            style={{
              fontWeight: 700,
            }}
            fontSize={{ xs: "48px", md: "64px" }}
            align="center"
          >
            Get your book for <span style={{ color: "#C665F3" }}>$37.99</span>
          </Typography>

          <Typography
            style={{
              fontWeight: 500,
              fontSize: "16px",
              color: "#BFBDD4DE",
              marginTop: "24px",
            }}
            align="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempus ex sem vel tristique pretium. Sed dolor ante, condimentum et
            scelerisque euismod, lacinia eu sapien metus.
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: "188px",
              height: "50px",
              borderRadius: "31px",
              fontWeight: 600,
              fontSize: "16px",
              background:
                "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
              boxShadow: "0px 4px 55.3px 0px #B75AFFB0",
              marginTop: "60px",
            }}
          >
            Buy now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
