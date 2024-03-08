import { Grid, Typography } from "@mui/material";
import ownerImg from "../images/ownerImg.png";

export function BookOwner() {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3" color="white">
          For whom is the book?
        </Typography>
      </Grid>
      <Grid item>
        <img src={ownerImg} alt="3D illustration of a young boy" />
      </Grid>
    </Grid>
  );
}
