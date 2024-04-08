import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "../assets/checkIcon.png";
import Redo from "@mui/icons-material/Redo";

export function CreateBook({
  bookType,
  bookImage,
  currentPrice,
  uniqSP,
  previousPrice,
  promoText,
  link,
}: {
  bookType: string;
  bookImage: string;
  currentPrice: string;
  uniqSP: string[];
  previousPrice?: string;
  promoText?: string;
  link: string;
}) {
  const isSmallest = useMediaQuery("(max-width: 380px)");

  return (
    <Grid
      item
      xs={12}
      lg={3.5}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px",
        background: "#0D0B22",
        borderRadius: "16px",
        boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
      }}
      margin={{ xs: "25px 0", lg: "0" }}
    >
      <Grid item textAlign="center">
        <Typography
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
          }}
          fontSize={{ xs: "24px", md: "30px" }}
        >
          {bookType}
        </Typography>

        <Typography
          marginTop={2}
          marginBottom={1}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
          }}
        >
          {previousPrice && (
            <span
              style={{
                fontSize: "20px",
                textDecoration: "line-through",
                color: "#FFFFFF5C",
              }}
            >
              {previousPrice}
            </span>
          )}
          <span
            style={{
              fontSize: "30px",
              color: "#C665F3",
            }}
          >
            {currentPrice}
          </span>
        </Typography>

        {promoText && (
          <span
            style={{
              padding: "4px 15px",
              background: "#C665F3",
              borderRadius: "14px",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            {promoText}
          </span>
        )}
      </Grid>

      <Grid item marginTop="20px">
        <img
          src={bookImage}
          alt="Book"
          style={{
            opacity: bookType === "Digitaal + Hardcover" ? "0.08" : "1",
          }}
        />
      </Grid>

      <List disablePadding sx={{ marginTop: "20px", width: "100%" }}>
        {uniqSP.map((feature) => (
          <ListItem sx={{ paddingLeft: "0", paddingRight: "0" }}>
            <img
              src={CheckIcon}
              alt="CheckIcon"
              width="20px"
              style={{ marginRight: "8px" }}
            />

            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>

      <Grid item textAlign="center" position="relative">
        {bookType !== "Digitaal" && (
          <Redo
            fontSize="large"
            sx={{
              transform: "rotate(-50deg)",
              position: "absolute",
              top: "38px",
              left: isSmallest ? "-12px" : 0,
            }}
          />
        )}
        <Button
          variant="contained"
          fullWidth
          sx={{
            width: "188px",
            height: "50px",
            borderRadius: "36px",
            fontWeight: 600,
            fontSize: "18px",
            background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
            marginTop: "20px",
            boxShadow: "0px 0px 44.6px 0px #8F00FF82",
          }}
          onClick={() => {
            window.open(`${link}`, "_self");
          }}
        >
          Bestellen
        </Button>

        {bookType !== "Digitaal" && (
          <Typography marginTop={1}>
            Nu met{" "}
            <span
              style={{
                color: "#C665F3",
              }}
            >
              gratis
            </span>{" "}
            cadeau verpakking!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
