import { Grid } from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { CreateBook } from "../components/CreateBook";
import DigitalBook from "../assets/digitalBook.png";
import PaperBook from "../assets/paperBook.png";

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
        marginTop={{ xs: "55px", md: "96px" }}
        marginBottom={{ xs: "30px", md: "60px" }}
        justifyContent="space-between"
      >
        <CreateBook bookType="Digital" bookImage={DigitalBook} />
        <CreateBook bookType="Paper" bookImage={PaperBook} />
        <CreateBook bookType="Digital+Paper" bookImage={DigitalBook} />
      </Grid>
    </Header>
  );
}
