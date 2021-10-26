import React from "react";
import { Fragment } from "react";
import Card from "@mui/material/Card";
import Footer from "./partial/commun/footer";

export default function LayoutExternal({ children }) {
  return (
    <Fragment>
      <Card variant="outlined" maxWidth={700}>
        <main>{children}</main>
        <div style={{ height: '10vh', margin: 0, padding: 0 }}></div>
      </Card>
      <Footer />
      
    </Fragment>
  );
}

