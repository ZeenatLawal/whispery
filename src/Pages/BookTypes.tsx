import { Grid } from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";

export function BookTypes() {
  return (
    <Header pageNumber={8} path="/summary">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Select book type you want to get" />
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop={{ xs: "65px", md: "70px" }}
        justifyContent="center"
      >
        Loading
      </Grid>
    </Header>
  );
}
