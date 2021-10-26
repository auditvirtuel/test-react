import React from "react";
import LayoutInternal from "./layout-internal";
import ListUser from "./partial/list/user";
import { Button, Tooltip } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";

export default function PageUserList() {
  const history = useHistory();

  return (
    <LayoutInternal title="Utilisateurs">
      <Grid container spacing={2}>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          xs={12}
        >
          <Tooltip title="Ajouter un utilisateur" arrow>
            <Button
              onClick={() => {
                history.push("/user-create");
              }}
            >
              <ControlPointIcon fontSize="large" /> Ajouter un Utilisateur
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <ListUser />
    </LayoutInternal>
  );
}
