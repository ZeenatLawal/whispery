import { Grid } from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { CreateBook } from "../components/CreateBook";
import DigitalBook from "../assets/digitalBook.png";
import PaperBook from "../assets/paperBook.png";

export function BookTypes() {
  const bookDetails = [
    {
      bookType: "Digitaal",
      bookImage: DigitalBook,
      currentPrice: "19,95",
      uniqSP: [
        "80 pagina’s leesplezier",
        "Achtergrondmuziek en voorleesoptie",
        "Digitaal bladeren",
        "Tablet en smartphone vriendelijk",
        "Levertijd binnen 48 uur",
      ],
      link: "https://whispery.ai/checkout/?add-to-cart=1109&quantity=1",
    },
    {
      bookType: "Hardcover",
      bookImage: PaperBook,
      currentPrice: "49,95",
      uniqSP: [
        "80 pagina’s leesplezier",
        "Formaat: 20 x 20 cm, hoogwaardige kwaliteit",
        "Inclusief boekenlegger",
        "Gratis verzending",
        "Levertijd binnen 2 weken",
      ],
      link: "https://whispery.ai/checkout/?add-to-cart=1114&quantity[1110]=1&quantity[1113]=1",
    },
    {
      bookType: "Digitaal + Hardcover",
      bookImage: DigitalBook,
      currentPrice: "59,95",
      previousPrice: "69,00",
      uniqSP: [
        "Alles van digitaal + hardcover",
        "Biedt de totale beleving",
        "15% korting",
      ],
      promoText: "Meest gekozen",
      link: "https://whispery.ai/checkout/?add-to-cart=1115&quantity[1111]=1&quantity[1113]=1",
    },
  ];

  return (
    <Header pageNumber={8} path="/billing">
      <Grid item xs={12} textAlign="center">
        <PageTitle
          title="Kies het type boek"
          subtitle="Heb je een kortingscode? Deze kun je bij de volgende stap toevoegen."
        />
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop={{ xs: "55px", md: "96px" }}
        marginBottom={{ xs: "30px", md: "60px" }}
        justifyContent="space-between"
      >
        {bookDetails.map(
          ({
            bookImage,
            bookType,
            currentPrice,
            uniqSP,
            previousPrice,
            promoText,
            link,
          }) => (
            <CreateBook
              bookType={bookType}
              bookImage={bookImage}
              currentPrice={currentPrice}
              uniqSP={uniqSP}
              previousPrice={previousPrice}
              promoText={promoText}
              link={link}
            />
          )
        )}
      </Grid>
    </Header>
  );
}
