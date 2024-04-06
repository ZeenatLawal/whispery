import {
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { useNavigate } from "react-router-dom";

export function Summary() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const textStyle = {
    color: "#D1BBED",
    fontWeight: 500,
    fontSize: "18px",
  };

  return (
    <Header pageNumber={6} path="/message">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Wauw, dat wordt een gaaf boek!" />
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
            Nog even ter controle:
          </Typography>

          <div
            style={{
              overflow: "auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography style={textStyle}>
              Als ik het goed begrijp wil je een boek laten maken voor [NAME],
              een [GENDER] van [AGE]. Het gezin bestaat uit [FAMILY MEMBER 1],
              [FAMILY MEMBER 2] en [FAMILY MEMBER 3]. Het boek krijgt een
              [THEME] thema waarin de volgende persoonlijke gebeurtenissen
              worden meegenomen:
            </Typography>

            <List>
              <ListItem>
                <Typography style={textStyle}>
                  <strong>1. </strong> [PERSONAL EVENT 1]
                </Typography>
              </ListItem>

              <ListItem>
                <Typography style={textStyle}>
                  <strong>2. </strong> [PERSONAL EVENT 2]
                </Typography>
              </ListItem>

              <ListItem>
                <Typography style={textStyle}>
                  <strong>3. </strong> [PERSONAL EVENT 3]
                </Typography>
              </ListItem>
            </List>

            <Typography style={textStyle}>
              Klopt dit niet? Ga dan terug naar de vorige stappen en pas de
              gegevens aan.
            </Typography>
          </div>
        </div>
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "65px", md: "70px" }}
      >
        <Button
          variant="contained"
          sx={{
            width: "288px",
            height: "50px",
            borderRadius: "36px",
            fontWeight: 600,
            fontSize: "18px",
            background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
            marginBottom: "30px",
            boxShadow: "0px 0px 44.6px 0px #8F00FF82",
          }}
          onClick={async () => {
            console.log("send summary");
            navigate("/billing");
          }}
        >
          De gegevens kloppen
        </Button>
      </Grid>
    </Header>
  );
}
