import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { OwnerForm } from "../components/OwnerForm";
import ownerImg from "../images/ownerImg.png";
import { Header } from "../components/Header";

export function BookOwner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header number={1}>
        <Grid
          container
          style={{ width: `calc(100vw - ${isSmallScreen ? 25 : 200}px)` }}
        >
          <Grid
            item
            xs={12}
            textAlign="center"
            marginTop={isSmallScreen ? "55px" : "80px"}
          >
            <Typography
              style={{ fontWeight: 700 }}
              sx={{
                typography: { sm: "h3", xs: "h5" },
              }}
            >
              For whom is the book?
            </Typography>
          </Grid>

          <Grid item xs={12} marginTop={isSmallScreen ? "65px" : "80px"}>
            <Grid container spacing={isSmallScreen ? 2 : 4} width="100%">
              <Grid item xs={12} sm={6}>
                <OwnerForm />
              </Grid>

              <Grid item xs={12} sm={6}>
                <img
                  src={ownerImg}
                  alt="3D illustration of a young boy"
                  style={{ height: isSmallScreen ? "436px" : "539px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Continue</Button>
        </Grid>
      </Header>
    </>
  );
}
