import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { useState } from "react";
import { apiFetch } from "../hooks/apiFetch";

export function LoginPage({
  setLoggedIn,
}: {
  setLoggedIn: (value: boolean) => void;
}) {
  const [authState, setAuthState] = useState<
    "logIn" | "signUp" | "forgotPassword"
  >("logIn");

  return (
    <Header>
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
          {authState === "logIn" && (
            <LogIn setLoggedIn={setLoggedIn} setAuthState={setAuthState} />
          )}

          {authState === "signUp" && (
            <SignUp setLoggedIn={setLoggedIn} setAuthState={setAuthState} />
          )}

          {authState === "forgotPassword" && (
            <ForgotPassword setAuthState={setAuthState} />
          )}
        </Grid>
      </Grid>
    </Header>
  );
}

function LogIn({
  setLoggedIn,
  setAuthState,
}: {
  setLoggedIn: (value: boolean) => void;
  setAuthState: React.Dispatch<
    React.SetStateAction<"logIn" | "signUp" | "forgotPassword">
  >;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Grid item xs={12}>
        <Typography
          style={{ fontWeight: 600, marginBottom: "30px" }}
          fontSize={{ xs: "28px", md: "40px" }}
          align="center"
        >
          Login
        </Typography>
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

      <Grid item xs={12}>
        <TextField
          type="password"
          label="Password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
            margin: "20px 0",
          }}
          onClick={async () => {
            if (!email || !password) {
              //seterrormsg
              return;
            }

            await apiFetch({
              path: "/auth/login",
              data: { email, password },
            });

            setLoggedIn(true);
          }}
        >
          Login
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider
          style={{
            backgroundColor: "white",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        />
      </Grid>

      <Grid item xs={12} display="flex" justifyContent="space-around">
        <Button
          style={{ color: "#C665F3", textDecoration: "underline" }}
          onClick={() => {
            setAuthState("forgotPassword");
          }}
        >
          Forgot password?
        </Button>

        <Button
          style={{ color: "#C665F3", textDecoration: "underline" }}
          onClick={() => {
            setAuthState("signUp");
          }}
        >
          Sign Up
        </Button>
      </Grid>
    </>
  );
}

function SignUp({
  setLoggedIn,
  setAuthState,
}: {
  setLoggedIn: (value: boolean) => void;
  setAuthState: React.Dispatch<
    React.SetStateAction<"logIn" | "signUp" | "forgotPassword">
  >;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Grid item xs={12}>
        <Typography
          style={{ fontWeight: 600, marginBottom: "30px" }}
          fontSize={{ xs: "28px", md: "40px" }}
          align="center"
        >
          Sign Up
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Name"
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

      <Grid item xs={12}>
        <TextField
          type="password"
          label="Password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
            margin: "20px 0",
          }}
          onClick={async () => {
            if (
              !email ||
              !password ||
              name.length === 0 ||
              password.length < 8
            ) {
              //seterrormsg
              return;
            }

            await apiFetch({
              path: "/auth/register",
              data: { name, email, password },
            });
            setLoggedIn(true);
          }}
        >
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider
          style={{
            backgroundColor: "white",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="space-around">
        <Button
          style={{ color: "#C665F3", textDecoration: "underline" }}
          onClick={() => {
            setAuthState("logIn");
          }}
        >
          Login
        </Button>
      </Grid>
    </>
  );
}

function ForgotPassword({
  setAuthState,
}: {
  setAuthState: React.Dispatch<
    React.SetStateAction<"logIn" | "signUp" | "forgotPassword">
  >;
}) {
  const [email, setEmail] = useState("");

  return (
    <>
      <Grid item xs={12}>
        <Typography
          style={{ fontWeight: 600, marginBottom: "30px" }}
          fontSize={{ xs: "28px", md: "40px" }}
          align="center"
        >
          Forgot Password
        </Typography>
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
            background: "linear-gradient(90deg, #718DF4 14.67%, #ED65F3 100%)",
            margin: "20px 0",
          }}
          onClick={async () => {
            if (!email) {
              //seterrormsg
              return;
            }

            await apiFetch({
              path: "/auth/forgot-password",
              data: { email },
            });
          }}
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider
          style={{
            backgroundColor: "white",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="space-around">
        <Button
          style={{ color: "#C665F3", textDecoration: "underline" }}
          onClick={() => {
            setAuthState("logIn");
          }}
        >
          Login
        </Button>

        <Button
          style={{ color: "#C665F3", textDecoration: "underline" }}
          onClick={() => {
            setAuthState("signUp");
          }}
        >
          Sign Up
        </Button>
      </Grid>
    </>
  );
}
