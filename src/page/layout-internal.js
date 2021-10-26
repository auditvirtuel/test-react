import React from "react";
import { Fragment } from "react";

import Horizontal from "./partial/menu/horizontal";
import Footer from "./partial/commun/footer";

const titleStyle = {
  marginLeft: 10,
};

const marginsStyle = {
    marginLeft: 20,
    marginRight: 20,
  };

export default function LayoutInternal({ title, children }) {
  return (
    <Fragment>
      <Horizontal />
      <div style={marginsStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <main>{children}</main>
      </div>
      <Footer />
    </Fragment>
  );
}
