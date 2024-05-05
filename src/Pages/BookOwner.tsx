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
import { useContext } from "react";
import whisperyCharacters from "../assets/whisperyCharacters.png";
import { Header } from "../components/Header";
import { ContinueButton } from "../components/ContinueButton";
import { PageTitle } from "../components/PageTitle";
import { BookContext } from "../contexts/BookContext";

export function BookOwner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMidScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { bookData, handleBookData } = useContext(BookContext);

  // const dutchToEnglishMap: any = {
  //   Meisje: "girl",
  //   Jongen: "boy",
  //   Licht: "light",
  //   Medium: "medium",
  //   Donker: "dark",
  //   "Heel kort/kaal": "very short bald",
  //   "Kort, stijl haar": "short straight",
  //   "Kort, krullend haar": "short curly",
  //   "Halflang, stijl haar": "medium length straight",
  //   "Halflang, krullend haar": "medium length curly",
  //   "Lang, stijl haar": "long straight",
  //   "Lang, krullend haar": "long curly",
  //   Blond: "blonde",
  //   Bruin: "brown",
  //   Rood: "red",
  //   Blauw: "blue",
  //   Groen: "green",
  //   Nee: "false",
  //   Ja: "true",
  // };

  // const translateToEnglish = (value: any) => {
  //   return dutchToEnglishMap[value] || value;
  // };

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
                    placeholder="Bijv. Isabel"
                    fullWidth
                    value={bookData.firstName}
                    onChange={(e) => {
                      handleBookData("firstName", e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputLabel htmlFor="age">Leeftijd</InputLabel>
                  <Select
                    id="age"
                    fullWidth
                    displayEmpty
                    inputProps={menuItemStyle}
                    value={bookData.age}
                    onChange={(e) => {
                      handleBookData("age", e.target.value);
                    }}
                    renderValue={(selected) => {
                      if (selected === "") {
                        return "Bijv. 8 jaar";
                      }
                      return `${selected} jaar`;
                    }}
                  >
                    {Array(12).map((_, index) => (
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
                      value={bookData.gender}
                      onChange={(e) => {
                        handleBookData("gender", e.target.value);
                      }}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bijv. Meisje";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Meisje">Meisje</MenuItem>
                      <MenuItem value="Jongen">Jongen</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="skinColor">Huidskleur</InputLabel>
                    <Select
                      id="skinColor"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={bookData.skinColor}
                      onChange={(e) => {
                        handleBookData("skinColor", e.target.value);
                      }}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bijv. Licht";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Licht">
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
                      <MenuItem value="Donker">
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
                      value={bookData.hairStyle}
                      onChange={(e) => {
                        handleBookData("hairStyle", e.target.value);
                      }}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bijv. Kort, krullend haar";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Heel kort/kaal">Heel kort/kaal</MenuItem>
                      <MenuItem value="Kort, stijl haar">
                        Kort, stijl haar
                      </MenuItem>
                      <MenuItem value="Kort, krullend haar">
                        Kort, krullend haar
                      </MenuItem>
                      <MenuItem value="Halflang, stijl haar">
                        Halflang, stijl haar
                      </MenuItem>
                      <MenuItem value="Halflang, krullend haar">
                        Halflang, krullend haar
                      </MenuItem>
                      <MenuItem value="Lang, stijl haar">
                        Lang, stijl haar
                      </MenuItem>
                      <MenuItem value="Lang, krullend haar">
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
                      value={bookData.hairColor}
                      onChange={(e) => {
                        handleBookData("hairColor", e.target.value);
                      }}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bijv. Bruin";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Blond">
                        <Chip
                          style={{
                            backgroundColor: "#F1CC8F",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Blond
                      </MenuItem>
                      <MenuItem value="Bruin">
                        <Chip
                          style={{
                            backgroundColor: "#684C3D",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Bruin
                      </MenuItem>
                      <MenuItem value="Donker">
                        <Chip
                          style={{
                            backgroundColor: "#000",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Donker
                      </MenuItem>
                      <MenuItem value="Rood">
                        <Chip
                          style={{
                            backgroundColor: "#5E0808",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Rood
                      </MenuItem>
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
                      value={bookData.eyeColor}
                      onChange={(e) => {
                        handleBookData("eyeColor", e.target.value);
                      }}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bijv. Bruin";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Blauw">
                        <Chip
                          style={{
                            backgroundColor: "#355BF5",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Blauw
                      </MenuItem>
                      <MenuItem value="Groen">
                        <Chip
                          style={{
                            backgroundColor: "#79B465",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Groen
                      </MenuItem>
                      <MenuItem value="Bruin">
                        <Chip
                          style={{
                            backgroundColor: "#684C3D",
                            height: "25px",
                            marginRight: "10px",
                          }}
                        />
                        Bruin
                      </MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="glasses">Bril</InputLabel>
                    <Select
                      id="glasses"
                      fullWidth
                      displayEmpty
                      inputProps={menuItemStyle}
                      value={bookData.glasses}
                      onChange={(e) => {
                        handleBookData("glasses", e.target.value);
                      }}
                      renderValue={(selected) => {
                        if (selected === "") {
                          return "Bijv. Ja";
                        }
                        return selected;
                      }}
                    >
                      <MenuItem value="Ja">Ja</MenuItem>
                      <MenuItem value="Nee">Nee</MenuItem>
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
                justifyContent: "center",
                marginTop: isMidScreen ? "80px" : "0",
              }}
            >
              <img
                src={whisperyCharacters}
                alt="3D illustration of whispery characters"
                style={{
                  width: isSmallScreen ? "300px" : "400px",
                  height: isSmallScreen ? "300px" : "400px",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </>

      <Grid
        container
        justifyContent="center"
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
