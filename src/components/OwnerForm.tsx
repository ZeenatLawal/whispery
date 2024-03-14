import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import { useState } from "react";

export function OwnerForm() {
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
    <div
      style={{
        padding: "20px",
        backgroundColor: "#17142B",
        borderRadius: "15px",
        boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel htmlFor="first-name">First name</InputLabel>
          <TextField
            id="first-name"
            placeholder="ex: James"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Select
            id="age"
            fullWidth
            displayEmpty
            inputProps={menuItemStyle}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            renderValue={(selected) => {
              if (selected === "") {
                return "ex: 8 years old";
              }
              return `${selected} years old`;
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
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              id="gender"
              fullWidth
              displayEmpty
              inputProps={menuItemStyle}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              renderValue={(selected) => {
                if (selected === "") {
                  return "ex: Girl";
                }
                return selected;
              }}
            >
              <MenuItem value="Girl">Girl</MenuItem>
              <MenuItem value="Boy">Boy</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="skinColor">Skin Color</InputLabel>
            <Select
              id="skinColor"
              fullWidth
              displayEmpty
              inputProps={menuItemStyle}
              value={skinColor}
              onChange={(e) => setSkinColor(e.target.value)}
              renderValue={(selected) => {
                if (selected === "") {
                  return "ex: Light";
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
                Light
              </MenuItem>
              <MenuItem value="Medium">
                <Chip
                  style={{
                    backgroundColor: "#DF944E",
                    height: "25px",
                    marginRight: "10px",
                  }}
                />{" "}
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
                Dark
              </MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid item container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="hairStyle">Hair style</InputLabel>
            <Select
              id="hairStyle"
              fullWidth
              displayEmpty
              inputProps={menuItemStyle}
              value={hairStyle}
              onChange={(e) => setHairStyle(e.target.value)}
              renderValue={(selected) => {
                if (selected === "") {
                  return "ex: Curly";
                }
                return selected;
              }}
            >
              <MenuItem value="Short">Short</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Long">Long</MenuItem>
              <MenuItem value="Curly">Curly</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="hairColor">Hair color</InputLabel>
            <Select
              id="hairColor"
              fullWidth
              displayEmpty
              inputProps={menuItemStyle}
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
              renderValue={(selected) => {
                if (selected === "") {
                  return "ex: Brown";
                }
                return selected;
              }}
            >
              <MenuItem value="Brown">Brown</MenuItem>
              <MenuItem value="Brunette">Brunette</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Red">Red</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid item container spacing={3}>
          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="eyeColor">Eye color</InputLabel>
            <Select
              id="eyeColor"
              fullWidth
              displayEmpty
              inputProps={menuItemStyle}
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
              renderValue={(selected) => {
                if (selected === "") {
                  return "ex: Brown";
                }
                return selected;
              }}
            >
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Brown">Brown</MenuItem>
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="Hazel">Hazel</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="glasses">Glasses</InputLabel>
            <Select
              id="glasses"
              fullWidth
              displayEmpty
              inputProps={menuItemStyle}
              value={glasses}
              onChange={(e) => setGlasses(e.target.value)}
              renderValue={(selected) => {
                if (selected === "") {
                  return "ex: Yes";
                }
                return selected;
              }}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
