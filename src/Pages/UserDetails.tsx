import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { ContinueButton } from "../components/ContinueButton";

export function UserDetails() {
  const theme = useTheme();
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Header pageNumber={7} path="/summary">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="User Details" />
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop={{ xs: "65px", md: "70px" }}
        justifyContent="center"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: isSmallScreen ? "31px 25px" : "50px 103px",
            background: "#17142A",
            borderRadius: "15px",
            boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
            maxWidth: isSmallest ? "300px" : "824px",
            height: "520px",
          }}
        >
          loading
        </div>
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "65px", md: "70px" }}
      >
        <ContinueButton path="/bookTypes" />
      </Grid>
    </Header>
  );
}
