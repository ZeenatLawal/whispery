import { Grid, Button, TextField, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import { PageTitle } from "../components/PageTitle";

export function PersonalEvents() {
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const [personalEvent, setPersonalEvent] = useState("");

  return (
    <Header pageNumber={3} path="/members">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Add personal events" />
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
          Maximum 3
        </Button>
        <Grid item>
          <TextField
            sx={{
              margin: { xs: "65px 0", md: "60px 0" },
              width: isSmallest ? "300px" : { xs: "380px", md: "447px" },
            }}
            placeholder="ex: Visit to the zoo"
            value={personalEvent}
            onChange={(e) => setPersonalEvent(e.target.value)}
          />
        </Grid>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "31px",
            boxShadow: "inset 1px 1px 0 0 #8B7CF8, inset 0 0 1px 1px #ED65F3",
            width: "248px",
            height: "50px",
          }}
          startIcon={<AddIcon sx={{ color: "#C665F3" }} fontSize="large" />}
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
            Add an Event
          </div>
        </Button>
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "338px", md: "340px" }}
      >
        <ContinueButton path="/themes" />
      </Grid>
    </Header>
  );
}
