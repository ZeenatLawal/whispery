import {
  Grid,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
} from "@mui/material";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { ContinueButton } from "../components/ContinueButton";
import Close from "@mui/icons-material/Close";
import { useState } from "react";

export function BillingInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Header pageNumber={7} path="/summary">
      <Grid item xs={12} textAlign="center">
        <PageTitle title="Facturatie gegevens" />
      </Grid>

      <Grid
        container
        item
        xs={12}
        marginTop={{ xs: "45px", md: "80px" }}
        marginBottom="192px"
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
            <Typography
              style={{ fontWeight: 600, marginBottom: "30px" }}
              variant="h6"
              align="center"
            >
              Vul de gegevens in die gebruikt moeten worden voor de betaling
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Naam"
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
            <TextField
              type="email"
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                marginBottom: "15px",
                borderRadius: "5px",
              }}
            />
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{
                width: "188px",
                borderRadius: "36px",
                fontSize: "18px",
                background:
                  "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
                margin: "20px 0",
              }}
              onClick={() => {
                if (name && email) {
                  setOpen(true);
                }
              }}
            >
              Verifieer Email
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { background: "#17142B", color: "#fff" } }}
      >
        <DialogTitle>Verifieer Email</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#fff",
          }}
        >
          <Close />
        </IconButton>
        <DialogContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint
          sapiente nisi autem nam velit ab et! Optio nulla iusto quia cum quidem
          dolorem accusantium enim veritatis saepe, tempora adipisci.
        </DialogContent>
        <DialogActions>
          <ContinueButton
            path="/bookTypes"
            onClick={async () => {
              console.log("send user details");
              setOpen(false);
              setName("");
              setEmail("");
            }}
          />
        </DialogActions>
      </Dialog>
    </Header>
  );
}
