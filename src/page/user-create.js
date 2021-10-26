import React from "react";
import LayoutInternal from "./layout-internal";
import FromUserCreate from "./partial/forms/user-create";


export default function PageUserCreate() {
  
  return (
    <LayoutInternal title="Création d'utilisateur">
          <FromUserCreate />
    </LayoutInternal>
  );
}
