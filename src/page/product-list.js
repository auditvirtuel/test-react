import React from "react";
import LayoutInternal from "./layout-internal";
import ListProduct from "./partial/list/product";

export default function PageProductList() {
  return (
    <LayoutInternal title="Liste des biens">
      <ListProduct />
    </LayoutInternal>
  );
}
