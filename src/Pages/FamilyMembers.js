import { Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { Header } from "../components/Header";
import { MembersForm } from "../components/MembersForm";
import { ContinueButton } from "../components/ContinueButton";
import AddIcon from "@mui/icons-material/Add";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

export function FamilyMembers() {
  const isSmallest = useMediaQuery("(max-width: 380px)");

  const buttonStyle = {
    borderRadius: "31px",
    boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
    width: isSmallest ? "300px" : { xs: "380px", md: "248px" },
    height: "50px",
  };

  return (
    <Header number={2} path="/">
      <Grid
        container
        width={{ xs: "calc(100vw - 25px)", md: "calc(100vw - 200px)" }}
      >
        <Grid item xs={12} textAlign="center">
          <Typography
            style={{ fontWeight: 700 }}
            fontSize={{ xs: "28px", md: "40px" }}
          >
            Add family members
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          marginTop={{ xs: "65px", md: "80px" }}
          alignItems="center"
        >
          <Grid container justifyContent="center">
            <MembersForm />
          </Grid>

          <Grid
            container
            justifyContent="center"
            marginTop={{ xs: "16px", md: "50px" }}
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Button
                variant="outlined"
                sx={buttonStyle}
                startIcon={
                  <AddIcon sx={{ color: "#C665F3" }} fontSize="large" />
                }
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
                  Add Family Member
                </div>
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                sx={buttonStyle}
                startIcon={
                  <AutoFixHighIcon sx={{ color: "#C665F3" }} fontSize="large" />
                }
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
                  Customize Family
                </div>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        marginTop={{ xs: "118px", md: "139.5px" }}
      >
        <ContinueButton path="/members" />
      </Grid>
    </Header>
  );
}
