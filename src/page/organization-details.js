import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LayoutInternal from "./layout-internal";

export default function PageOrganizationDetails() {
  let params = useParams();
  let oranizationId = params.oranizationId;
  return (
    <div>
      <LayoutInternal title="Organization details">
        <Link to="/">Organization {oranizationId}</Link>
      </LayoutInternal>
    </div>
  );
}
