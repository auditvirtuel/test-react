import { Fragment } from "react";

import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import { API } from "../../api";

export default function ListProduct() {
  const { isLoading, error, data } = useQuery("userList", () =>
    API.product
      .getByOrganizationId("77239b0e-100c-43af-9255-fb60ea441197")
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
      {data.map((product) => {
        return <ProductCard product={product} />;
      })}
    </Fragment>
  );
}

function ProductCard({product}) {
  const history = useHistory();

  return (
    <Card sx={{ maxWidth: 345, float:"left" }}>
      <CardActionArea>
        <ListItemButton
          onClick={() => {
            history.push("/products/"+product.uuid);
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={`"coucou/${product.image_uri}"`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.uuid} {product.address} {product.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              reference: {product.id_internal}
            </Typography>
          </CardContent>
        </ListItemButton>
      </CardActionArea>
    </Card>
  );
}

//   function OldProductView(){
//     function handleDeleteUser(k) {
//         console.log("supprimer l'utilisateur id " + k);
//       }
//       return(
//     <Fragment>
//     <ListItemButton
//       onClick={() => {
//         history.push("/products/" + product.uuid);
//       }}
//     >
//       <
//       <ListItemText
//         primary={`${product.name} ${product.address} • ${product.city}`}
//       />
//       <Tooltip title="Supprimer l' utilisateur" arrow>
//         <DeleteIcon
//           onClick={() => {
//             handleDeleteUser(product.uuid);
//           }}
//         />
//       </Tooltip>
//     </ListItemButton>
//     <Divider />
//   </Fragment>
//   );
//   }
