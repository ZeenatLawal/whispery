import {
  Grid,
  Button,
  TextField,
  InputLabel,
  useMediaQuery,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";
import { useContext, useState } from "react";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { PageTitle } from "../components/PageTitle";
import { BookContext } from "../contexts/BookContext";

export function PersonalEvents() {
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const [event, setEvent] = useState("");
  const { personalEvents, addPersonalEvent, removePersonalEvent } =
    useContext(BookContext);

  return (
    <Header pageNumber={3} path="/members">
      <Grid item xs={12} textAlign="center">
        <PageTitle
          title="Voeg persoonlijke gebeurtenissen toe"
          subtitle="Deze persoonlijke gebeurtenissen maken straks onderdeel uit van het verhaal."
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
          startIcon={<InfoOutlinedIcon fontSize="large" />}
        >
          Maximaal 3
        </Button>
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop="25px"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "40px 25px",
            backgroundColor: "#17142B",
            borderRadius: "15px",
            boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
          }}
        >
          <InputLabel htmlFor="add-event">
            Gebeurtenis {personalEvents.length + 1}
          </InputLabel>
          <TextField
            id="add-event"
            placeholder="Bijv. Het gezin krijgt binnenkort een puppy"
            fullWidth
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} textAlign="center" marginTop="16px">
          <Button
            variant="outlined"
            sx={{
              padding: "5px 0",
              borderRadius: "31px",
              boxShadow: "inset 1px 1px 0 0 #8B7CF8, inset 0 0 1px 1px #ED65F3",
              width: isSmallest ? "280px" : "320px",
              height: "50px",
              "&:disabled": { opacity: "0.4" },
            }}
            startIcon={<AddIcon sx={{ color: "#C665F3" }} fontSize="large" />}
            onClick={() => {
              addPersonalEvent(event);
              setEvent("");
            }}
            disabled={personalEvents.length === 3}
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #8B7CF8 0%, #ED65F3 85.48%)",
                backgroundClip: "text",
                color: "transparent",
                fontSize: "16px",
              }}
            >
              Voeg deze gebeurtenis toe
            </div>
          </Button>
        </Grid>

        {personalEvents.length > 0 && (
          <div
            style={{
              padding: "25px 40px",
              marginTop: "16px",
              backgroundColor: "#17142B",
              borderRadius: "15px",
              boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
            }}
          >
            <List>
              {personalEvents.map((event, index) => (
                <ListItem
                  key={index}
                  style={{ justifyContent: "space-between" }}
                >
                  <Typography>
                    <strong>{index + 1}. </strong> {event}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      removePersonalEvent(personalEvents[index]);
                    }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </div>
        )}
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "118px", md: "139.5px" }}
      >
        <ContinueButton
          path="/themes"
          onClick={async () => {
            // add events
          }}
        />
      </Grid>
    </Header>
  );
}
