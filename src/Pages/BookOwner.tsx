import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { OwnerForm } from "../components/OwnerForm";
import ownerImg from "../assets/ownerImg.png";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";

export function BookOwner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMidScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Header pageNumber={1} path="/">
      <>
        <Grid item xs={12} textAlign="center">
          <PageTitle title="For whom is the book?" />
        </Grid>

        <Grid
          item
          container
          xs={12}
          marginTop={{ xs: "45px", md: "80px" }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div
              style={{
                width: isLgScreen ? "505px" : "auto",
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
      </>

      <Grid
        container
        justifyContent={{ xs: "center", md: "flex-end" }}
        marginTop={{ xs: "40px", md: "80px" }}
      >
        <ContinueButton path="/members" />
      </Grid>
    </Header>
  );
}
