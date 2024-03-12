import { Grid } from "@mui/material";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";

export function ChooseTheme() {
  return (
    <Header number={3} path="/events">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Choose a theme" />
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "338px", md: "340px" }}
      >
        <ContinueButton path="/themes" />
      </Grid>
    </Header>
  );
}
