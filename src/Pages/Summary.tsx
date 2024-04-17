import {
  Grid,
  useMediaQuery,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export function Summary() {
  const navigate = useNavigate();
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const { bookData, familyMembers, personalEvents } = useContext(BookContext);

  const textStyle = {
    color: "#D1BBED",
    fontWeight: 500,
    fontSize: "18px",
  };

  let familySentence = "Het gezin bestaat uit " + familyMembers.join(", ");

  if (familyMembers.length > 1) {
    familySentence = familySentence.replace(/,([^,]*)$/, " en$1");
  }

  return (
    <Header pageNumber={6} path="/message">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Wauw, dat wordt een gaaf boek!" />
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
            background: "#17142A",
          }}
          startIcon={<InfoOutlined fontSize="large" />}
        >
          Nog even ter controle
        </Button>
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
            padding: "30px",
            background: "#17142A",
            borderRadius: "15px",
            boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
            maxWidth: isSmallest ? "300px" : "824px",
            textAlign: "center",
          }}
        >
          <Typography style={textStyle}>
            Als ik het goed begrijp wil je een boek laten maken voor{" "}
            {bookData.firstName}, een {bookData.gender} van {bookData.age}.{" "}
            {familySentence}. Het boek krijgt een {bookData.theme} thema waarin
            de volgende persoonlijke gebeurtenissen worden meegenomen:
          </Typography>

          <List>
            {personalEvents.map((event, index) => (
              <ListItem key={index}>
                <Typography style={textStyle}>
                  <strong>{index + 1}. </strong> {event}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Typography
            style={{
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Klopt dit niet? Ga dan terug naar de vorige stappen en pas de
            gegevens aan.
          </Typography>
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
            // create book
            navigate("/billing");
          }}
        >
          De gegevens kloppen
        </Button>
      </Grid>
    </Header>
  );
}
