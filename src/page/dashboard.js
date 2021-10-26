import React from "react";
import LayoutInternal from "./layout-internal";

import {getJWT} from "./localStorage"

export default function PageDashboard() {
  console.log("jwt is "+getJWT());
  const jwt = getJWT();
  return (
    <div>
      <LayoutInternal title="Dashboard">
           {jwt}
      </LayoutInternal>
    </div>
  );
}