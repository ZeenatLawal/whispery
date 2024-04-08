import {
  Grid,
  Button,
  TextField,
  Typography,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function BillingInfo() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <Header pageNumber={7} path="/summary">
      <Grid item xs={12} textAlign="center">
        <PageTitle
          title="Bijna klaar!"
          subtitle="Wat zijn je voornaam en e-mailadres?"
        />
      </Grid>

      <Grid
        item
        container
        xs={12}
        marginTop={{ xs: "45px", md: "80px" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          item
          xs={12}
          md={6}
          style={{
            padding: "20px",
            backgroundColor: "#17142B",
            borderRadius: "15px",
            boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
          }}
        >
          <Grid item xs={12}>
            <InputLabel htmlFor="first-name">Voornaam</InputLabel>
            <TextField
              id="first-name"
              placeholder="Vul je voornaam in"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                marginBottom: "15px",
                borderRadius: "5px",
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <InputLabel htmlFor="email">E-mailadres</InputLabel>
            <TextField
              id="email"
              type="email"
              placeholder="Vul je e-mailadres in"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                marginBottom: "15px",
                borderRadius: "5px",
              }}
            />
          </Grid>

          <Grid item>
            <FormControlLabel
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                margin: "0",
              }}
              control={
                <Checkbox
                  sx={{
                    paddingTop: "2px",
                    color: "#5256A9A6",
                    "&.Mui-checked": {
                      color: "#ED65F3",
                    },
                  }}
                  checked={acceptTerms}
                  onChange={(e) => {
                    setAcceptTerms(e.target.checked);
                  }}
                />
              }
              label={
                <Typography>
                  Ik ga akkoord met de algemene voorwaarden en het
                  privacybeleid.
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "118px", md: "139.5px" }}
      >
        <Button
          variant="contained"
          sx={{
            width: "188px",
            height: "50px",
            borderRadius: "36px",
            fontWeight: 600,
            fontSize: "18px",
            background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
            marginBottom: "30px",
            boxShadow: "0px 0px 44.6px 0px #8F00FF82",
            opacity: acceptTerms ? "1" : "0.4",
          }}
          endIcon={<ArrowRightAltIcon fontSize="large" />}
          onClick={async () => {
            if (name && email && acceptTerms) {
              // verify email and proceed

              setName("");
              setEmail("");
              navigate("/bookTypes");
            }
          }}
        >
          Volgende
        </Button>
      </Grid>
    </Header>
  );
}
