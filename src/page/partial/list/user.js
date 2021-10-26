import { Fragment } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import { API } from "../../api";

const style = {
  width: "100%",
  bgcolor: "grey",
};

export default function ListUser() {
  const history = useHistory();

  function handleDeleteUser(k) {
    console.log("supprimer l'utilisateur id " + k);
  }

  const { isLoading, error, data } = useQuery("userList", () =>
    API.user.getUsers("77239b0e-100c-43af-9255-fb60ea441197")
      .then((res) => {
        console.log("ok", res.data);
        return res.data;
      })
      .catch((error) => {
        console.log("errors", error);
      })
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Fragment>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {data.map((user) => {
          return (
            <Fragment>
              <ListItemButton
                onClick={() => {
                  history.push("/users/" + user.uuid);
                }}
              >
                <ListItemText
                  primary={`${user.first_name} ${user.last_name} • ${user.kind}`}
                />
                <Tooltip title="Supprimer l' utilisateur" arrow>
                  <DeleteIcon
                    onClick={() => {
                      handleDeleteUser(user.uuid);
                    }}
                  />
                </Tooltip>
              </ListItemButton>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </Fragment>
  );
}
