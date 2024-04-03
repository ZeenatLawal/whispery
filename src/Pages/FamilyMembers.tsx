import { useState } from "react";
import {
  Grid,
  Button,
  useMediaQuery,
  TextField,
  InputLabel,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import AddIcon from "@mui/icons-material/Add";
import { PageTitle } from "../components/PageTitle";

export function FamilyMembers() {
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const [member, setMember] = useState("");
  const [family, setFamily] = useState<string[]>([]);

  return (
    <Header pageNumber={2} path="/">
      <Grid item xs={12} textAlign="center">
        <PageTitle
          title="Voeg gezinsleden toe"
          subtitle="Voeg de moeder, vader, zussen en broers toe die je mee wilt nemen in het verhaal."
        />
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
          <InputLabel htmlFor="first-member">
            Gezinslid {family.length + 1}
          </InputLabel>
          <TextField
            id="first-member"
            placeholder="Bjiv. Moeder Evelien"
            fullWidth
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} textAlign="center" marginTop="16px">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "31px",
              boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
              width: isSmallest ? "300px" : { xs: "380px", md: "320px" },
              height: "50px",
            }}
            startIcon={<AddIcon sx={{ color: "#C665F3" }} fontSize="large" />}
            onClick={() => {
              setFamily((prevFamily) => {
                if (prevFamily.includes(member)) {
                  return prevFamily;
                } else {
                  return [...prevFamily, member];
                }
              });
              setMember("");
            }}
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
              Voeg nog een gezinslid toe
            </div>
          </Button>
        </Grid>

        {family.length > 0 && (
          <div
            style={{
              padding: "25px 40px",
              marginTop: "16px",
              backgroundColor: "#17142B",
              borderRadius: "15px",
              boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
            }}
          >
            <List component="ol">
              {family.map((fam, index) => (
                <ListItem key={index} component="li">
                  <Typography>
                    <strong>{index + 1}. </strong> {fam}
                  </Typography>
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
          path="/events"
          onClick={async () => {
            console.log("send family members details");
          }}
        />
      </Grid>
    </Header>
  );
}
