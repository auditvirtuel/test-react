import React from "react";
import Link from "@mui/material/Link";
import Copyright from "./copyright";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            <Copyright />
            <Link to="/cgu" />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
