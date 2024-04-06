import {
  Grid,
  useMediaQuery,
  useTheme,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import { useState } from "react";
import ownerImg from "../assets/ownerImg.png";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";

export function BookOwner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMidScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [hairStyle, setHairStyle] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [glasses, setGlasses] = useState("");

  const menuItemStyle = {
    MenuProps: {
      MenuListProps: {
        sx: {
          backgroundColor: "#131030",
          maxHeight: "200px",
          overflowY: "auto",
          padding: 0,
          margin: 0,
        },
      },
    },
  };

  return (
    <Header pageNumber={1} path="/">
      <>
        <Grid item xs={12} textAlign="center">
          <PageTitle
            title="Voor wie is het boek?"
            subtitle="Dit kind wordt de hoofdpersoon in het boek."
          />
        </Grid>

        <Grid
          item
          container
          xs={12}
          marginTop={{ xs: "45px", md: "80px" }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#17142B",
                borderRadius: "15px",
                boxShadow:
                  "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputLabel htmlFor="first-name">Voornaam</InputLabel>
                  <TextField
                    id="first-name"
                    placeholder="Bjiv. Isabel"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputLabel htmlFor="age">Leeftijd</InputLabel>
                  <Select
                    id="age"
                    fullWidth
                    displayEmpty
                    inputProps={menuItemStyle}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    renderValue={(selected) => {
                      if (selected === "") {
                        return "Bjiv. 8 jaar";
                      }
                      return `${selected} jaar`;
                    }}
                  >
                    {[...Array(100)].map((_, index) => (
                      <MenuItem key={index + 1} value={index + 1}>
                        {index + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid item container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="gender">Geslacht</InputLabel>
                    <Select
                      id="gender"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bjiv. Meisje";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Girl">Meisje</MenuItem>
                      <MenuItem value="Boy">Jongen</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="skinColor">Huidskleur</InputLabel>
                    <Select
                      id="skinColor"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={skinColor}
                      onChange={(e) => setSkinColor(e.target.value)}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bjiv. Licht";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Light">
                        <Chip
                          style={{
                            backgroundColor: "#FFD4A1",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Licht
                      </MenuItem>
                      <MenuItem value="Medium">
                        <Chip
                          style={{
                            backgroundColor: "#DF944E",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Medium
                      </MenuItem>
                      <MenuItem value="Dark">
                        <Chip
                          style={{
                            backgroundColor: "#3A2001",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Donker
                      </MenuItem>
                    </Select>
                  </Grid>
                </Grid>

                <Grid item container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="hairStyle">Haarstijl</InputLabel>
                    <Select
                      id="hairStyle"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={hairStyle}
                      onChange={(e) => setHairStyle(e.target.value)}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bjiv. Kort, krullend haar";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Very short/bald">
                        Heel kort/kaal
                      </MenuItem>
                      <MenuItem value="Short, straight hair">
                        Kort, stijl haar
                      </MenuItem>
                      <MenuItem value="Short, curly hair">
                        Kort, krullend haar
                      </MenuItem>
                      <MenuItem value="Medium length, straight hair">
                        Halflang, stijl haar
                      </MenuItem>
                      <MenuItem value="Medium Length, curly hair">
                        Halflang, krullend haar
                      </MenuItem>
                      <MenuItem value="Long, straight hair">
                        Lang, stijl haar
                      </MenuItem>
                      <MenuItem value="Long, curly hair">
                        Lang, krullend haar
                      </MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="hairColor">Haarkleur</InputLabel>
                    <Select
                      id="hairColor"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={hairColor}
                      onChange={(e) => setHairColor(e.target.value)}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bjiv. Bruin";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Blonde">Blond</MenuItem>
                      <MenuItem value="Brown">Bruin</MenuItem>
                      <MenuItem value="Dark">Donker</MenuItem>
                      <MenuItem value="Red">Rood</MenuItem>
                    </Select>
                  </Grid>
                </Grid>

                <Grid item container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="eyeColor">Kleur ogen</InputLabel>
                    <Select
                      id="eyeColor"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={eyeColor}
                      onChange={(e) => setEyeColor(e.target.value)}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bjiv. Bruin";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Blue">Blauw</MenuItem>
                      <MenuItem value="Green">Groen</MenuItem>
                      <MenuItem value="Brown">Bruin</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="glasses">Bril</InputLabel>
                    <Select
                      id="glasses"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={glasses}
                      onChange={(e) => setGlasses(e.target.value)}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bjiv. Ja";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Yes">Ja</MenuItem>
                      <MenuItem value="No">Nee</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div
              style={{
                height: isSmallScreen ? "446px" : "539px",
                display: "flex",
                alignItems: "center",
                marginTop: isMidScreen ? "80px" : "0",
              }}
            >
              <img
                src={ownerImg}
                alt="3D illustration of a young boy"
                style={{
                  width: "100%",
                  maxHeight: isSmallScreen ? "680px" : "960px",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </>

      <Grid
        container
        justifyContent={{ xs: "center", md: "flex-end" }}
        marginTop={{ xs: "40px", md: "80px" }}
      >
        <ContinueButton
          path="/members"
          onClick={async () => {
            //send character details
          }}
        />
      </Grid>
    </Header>
  );
}
