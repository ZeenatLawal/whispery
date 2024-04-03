import {
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  TextField,
} from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";
import { useState } from "react";

export function PersonalMessage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [personalMessage, setPersonalMessage] = useState("");

  return (
    <Header pageNumber={5} path="/themes">
      <Grid item xs={12} textAlign="center">
        <PageTitle
          title="Persoonlijke boodschap"
          subtitle="Laat een persoonlijke boodschap achter voor diegene die het boek krijgt. Dit wordt de eerste pagina van het boek."
        />

        <Button
          variant="outlined"
          sx={{
            borderRadius: "49px",
            boxShadow: "inset 1px 1px 0 0 #8B7CF8, inset 0 0 1px 1px #ED65F3",
            height: "34px",
            color: "#BFBDD4DE",
            padding: "5px 19px",
            fontWeight: 400,
            marginTop: "20px",
          }}
          startIcon={<InfoOutlined fontSize="large" />}
        >
          Maximaal 60 woorden
        </Button>
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop={{ xs: "55px", md: "80px" }}
        marginBottom={{ xs: "73px", md: "103px" }}
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "40px 25px",
            textAlign: "center",
            backgroundColor: "#17142B",
            borderRadius: "15px",
            boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
          }}
        >
          <TextField
            sx={{
              margin: { xs: "35px 0", md: "50px 0" },
            }}
            fullWidth
            multiline
            placeholder={
              isSmallScreen
                ? `Ut blandit ipsum ornare id. Integer ornare enim a massa elementum malesuada.
            Vivamus augue ipsum, hendrerit et neque sed, tincidunt dapibus ante. Nulla vitae ante volutpat ex dictum eleifend volutpat in velit. Ut non enim vel orci condimentum blandit sit amet sed nunc. Donec tincidunt vehicula finibus.`
                : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu erat, elementum vitae laoreet finibus, sagittis vel leo. Nam facilisis magna ligula, ut blandit ipsum ornare id. Integer ornare enim a massa elementum malesuada.
            Vivamus augue ipsum, hendrerit et neque sed, tincidunt dapibus ante. Nulla vitae ante volutpat ex dictum eleifend volutpat in velit. Ut non enim vel orci condimentum blandit sit amet sed nunc. Donec tincidunt vehicula finibus.`
            }
            value={personalMessage}
            onChange={(e) => {
              const message = e.target.value;
              const wordCount = message.trim().split(/\s+/).length;
              if (wordCount <= 60) {
                setPersonalMessage(message);
              }
            }}
          />

          <ContinueButton
            path="/summary"
            onClick={async () => {
              console.log("send personal message");
            }}
          />
        </Grid>
      </Grid>
    </Header>
  );
}
