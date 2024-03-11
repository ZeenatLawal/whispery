import { Grid, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";

export function PersonalEvents() {
  return (
    <Header number={3} path="/members">
      <Grid
        container
        width={{ xs: "calc(100vw - 25px)", md: "calc(100vw - 200px)" }}
      >
        <Grid item xs={12} textAlign="center">
          <Typography
            style={{ fontWeight: 700 }}
            fontSize={{ xs: "28px", md: "40px" }}
          >
            Add personal events
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          marginTop={{ xs: "65px", md: "80px" }}
          alignItems="center"
        >
          in progess
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "118px", md: "139.5px" }}
      >
        <ContinueButton path="/events" />
      </Grid>
    </Header>
  );
}
