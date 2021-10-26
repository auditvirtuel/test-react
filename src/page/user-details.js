import React from "react";
import { useParams } from "react-router-dom";
import LayoutInternal from "./layout-internal";

export default function PageUserDetails() {
  let params = useParams();
  let userId = params.userId
  return (
    <LayoutInternal title="User details">
      {userId}
    </LayoutInternal>
  );
}
