import { useContext, useState } from "react";
import {
  Grid,
  Button,
  useMediaQuery,
  TextField,
  InputLabel,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { PageTitle } from "../components/PageTitle";
import { BookContext } from "../contexts/BookContext";

export function FamilyMembers() {
  const isSmallest = useMediaQuery("(max-width: 380px)");
  const [member, setMember] = useState("");
  const { familyMembers, addFamilyMember, removeFamilyMember } =
    useContext(BookContext);

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
            Gezinslid {familyMembers.length + 1}
          </InputLabel>
          <TextField
            id="first-member"
            placeholder="Bijv. Moeder Evelien"
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
              boxShadow: "inset 1px 1px 0 0 #8B7CF8, inset 0 0 1px 1px #ED65F3",
              width: isSmallest ? "280px" : "320px",
              height: "50px",
            }}
            startIcon={<AddIcon sx={{ color: "#C665F3" }} fontSize="large" />}
            onClick={() => {
              addFamilyMember(member);
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
              Voeg dit gezinslid toe
            </div>
          </Button>
        </Grid>

        {familyMembers.length > 0 && (
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
              {familyMembers.map((fam, index) => (
                <ListItem
                  key={index}
                  style={{ justifyContent: "space-between" }}
                >
                  <Typography>
                    <strong>{index + 1}. </strong> {fam}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      removeFamilyMember(familyMembers[index]);
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
          path="/events"
          onClick={async () => {
            // add family members
          }}
        />
      </Grid>
    </Header>
  );
}
