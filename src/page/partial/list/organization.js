import DataGrid from "@mui/material/DataGrid";

export function ListOrganization() {
  let rows = ["rtest", "rcoucou"];
  let columns = ["ctest", "ccoucou"];
  return <DataGrid rows={rows} columns={columns} />;
}
