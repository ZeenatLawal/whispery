import { Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";

export function Summary() {
  const theme = useTheme();
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Header pageNumber={6} path="/message">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Wow, that would be a great book!" />
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
          <Typography
            style={{
              fontWeight: 600,
              textAlign: "center",
              fontSize: "24px",
              marginBottom: "47px",
            }}
          >
            Short summary:
          </Typography>

          <Typography
            style={{
              color: "#D1BBED",
              overflow: "auto",
              fontWeight: 500,
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            arcu erat, elementum vitae laoreet finibus, sagittis vel leo. Nam
            facilisis magna ligula, ut blandit ipsum ornare id. Integer ornare
            enim a massa elementum malesuada.
            <br />
            <br />
            Vivamus augue ipsum, hendrerit et neque sed, tincidunt dapibus ante.
            Nulla vitae ante volutpat ex dictum eleifend volutpat in velit. Ut
            non enim vel orci condimentum blandit sit amet sed nunc. Donec
            tincidunt vehicula finibus.
            <br />
            <br />
            Vivamus augue ipsum, hendrerit et neque sed, tincidunt dapibus ante.
            Nulla vitae ante volutpat ex dictum eleifend volutpat in velit. Ut
            non enim vel orci condimentum blandit sit amet sed nunc. Donec
            tincidunt vehicula finibus.
          </Typography>
        </div>
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "65px", md: "70px" }}
      >
        <ContinueButton path="/animation" />
      </Grid>
    </Header>
  );
}
