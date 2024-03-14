import { Grid, TextField, InputLabel } from "@mui/material";
import { useState } from "react";

export function MembersForm() {
  const [firstMember, setFirstMember] = useState("");
  const [secondMember, setSecondMember] = useState("");

  return (
    <div
      style={{
        padding: "40px 25px",
        backgroundColor: "#17142B",
        borderRadius: "15px",
        boxShadow: "inset 2px 2px 0 0 #8B7CF8, inset 0 0 2px 2px #ED65F3",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel htmlFor="first-member">Family member №1</InputLabel>
          <TextField
            id="first-member"
            placeholder="ex: Mother Petra"
            fullWidth
            value={firstMember}
            onChange={(e) => setFirstMember(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="second-member">Family member №2</InputLabel>
          <TextField
            id="second-member"
            placeholder="ex: Father Dan"
            fullWidth
            value={secondMember}
            onChange={(e) => setSecondMember(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
}
