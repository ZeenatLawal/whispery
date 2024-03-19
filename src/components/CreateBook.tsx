import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CheckIcon from "../assets/checkIcon.png";

export function CreateBook({
  bookType,
  bookImage,
}: {
  bookType: string;
  bookImage: string;
}) {
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
      <Typography
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "34px",
        }}
      >
        {bookType}
      </Typography>

      <Typography
        marginTop={2}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        }}
      >
        <span
          style={{
            fontSize: "20px",
            textDecoration: "line-through",
            color: "#FFFFFF5C",
          }}
        >
          29,50{" "}
        </span>
        <span
          style={{
            fontSize: "30px",
            color: "#C665F3",
          }}
        >
          19,50
        </span>
      </Typography>

      <Grid item marginTop="20px">
        <img
          src={bookImage}
          alt="Book"
          style={{ opacity: bookType === "Digital+Paper" ? "0.08" : "1" }}
        />
      </Grid>

      <List disablePadding sx={{ marginTop: "20px", width: "100%" }}>
        <ListItem sx={{ paddingLeft: "0", paddingRight: "0" }}>
          <img
            src={CheckIcon}
            alt="CheckIcon"
            width="20px"
            style={{ marginRight: "8px" }}
          />

          <ListItemText primary="Example feature listed here" />
        </ListItem>
        <ListItem sx={{ paddingLeft: "0", paddingRight: "0" }}>
          <img
            src={CheckIcon}
            alt="CheckIcon"
            width="20px"
            style={{ marginRight: "8px" }}
          />

          <ListItemText primary="Example feature listed here" />
        </ListItem>
        <ListItem sx={{ paddingLeft: "0", paddingRight: "0" }}>
          <img
            src={CheckIcon}
            alt="CheckIcon"
            width="20px"
            style={{ marginRight: "8px" }}
          />

          <ListItemText primary="Example feature listed here" />
        </ListItem>
        <ListItem sx={{ paddingLeft: "0", paddingRight: "0" }}>
          <img
            src={CheckIcon}
            alt="CheckIcon"
            width="20px"
            style={{ marginRight: "8px" }}
          />

          <ListItemText primary="Example feature listed here" />
        </ListItem>
      </List>

      <Button
        variant="contained"
        fullWidth
        sx={{
          height: "48px",
          borderRadius: "8px",
          padding: "12px 20px",
          background: "linear-gradient(90deg, #8B7CF8 0%, #ED65F3 85.48%)",
          fontWeight: 600,
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Continue
      </Button>
    </Grid>
  );
}
