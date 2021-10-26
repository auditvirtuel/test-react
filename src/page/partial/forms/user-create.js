import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, CssBaseline, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { useHistory } from "react-router-dom";

const validationSchema = Yup.object({
  firt_name: Yup.string()
    .max(30, "Votre prénom doit contenir au maximum 30 caractères")
    .required("Requis"),
  last_name: Yup.string()
    .max(30, "Votre nom doit contenir au maximum 30 caractères")
    .required("Requis"),
  email: Yup.string().email("L'email est invalid").required("Requis"),
});

export default function FromUserCreate() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firt_name: "first_name",
      last_name: "last_name",
      email: "coucou@salut.fr",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      history.goBack();
    },
  });
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 5,
          padding:5,
          borderRadius:2,
          backgroundColor:"#f4f4f4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="firt_name"
              label="Prénom"
              name="firt_name"
              value={formik.values.firt_name}
              onChange={formik.handleChange}
              error={
                formik.touched.firt_name && Boolean(formik.errors.firt_name)
              }
              helperText={formik.touched.firt_name && formik.errors.firt_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="last_name"
              label="Nom"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              itemType="submit"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Ajouter
            </Button>
          </Grid>
        </Grid>
      </form>
        </Box>
    </Container>
  );
}
