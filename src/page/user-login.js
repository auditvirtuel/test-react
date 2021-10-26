import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LayoutExternal from "./layout-external";
import { useHistory } from "react-router-dom";
import { API } from "./api";
import { saveJWT, saveOrganizationUUID, saveUserUUID } from "./localStorage";

export default function PageUserLogin() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let req = API.user.login(data.get("email"), data.get("password"));

    req
      .then((req) => {
        saveJWT(req.data.jwt);
        saveOrganizationUUID(req.data.uuid_organization);
        saveUserUUID(req.data.uuid_user);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log("local err", err);
      });
  };

  return (
    <LayoutExternal>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se rappeler de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se logger
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/password-recovery" variant="body2">
                  Password oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/user-signup" variant="body2">
                  {"Pas encore inscrit ? Inscription"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </LayoutExternal>
  );
}
