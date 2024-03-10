import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { OwnerForm } from "../components/OwnerForm";
import ownerImg from "../images/ownerImg.png";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";

export function BookOwner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMidScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Header number={1}>
      <Grid
        container
        width={{ xs: "calc(100vw - 25px)", md: "calc(100vw - 200px)" }}
      >
        <Grid item xs={12} textAlign="center">
          <Typography
            style={{ fontWeight: 700 }}
            sx={{
              typography: { sm: "h3", xs: "h5" },
            }}
          >
            For whom is the book?
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          marginTop={{ xs: "65px", md: "80px" }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div
              style={{
                width: isLgScreen && "505px",
              }}
            >
              <OwnerForm />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div
              style={{
                height: isSmallScreen ? "446px" : "539px",
                display: "flex",
                alignItems: "center",
                marginTop: isMidScreen ? "80px" : "0",
              }}
            >
              <img
                src={ownerImg}
                alt="3D illustration of a young boy"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent={{ xs: "center", md: "flex-end" }}
        marginTop={{ xs: "40px", md: "80px" }}
      >
        <ContinueButton />
      </Grid>
    </Header>
  );
}
