import { client } from "./client";

export const getProductsByOrganizationId = (uuid_organization) => {
  return client({
    method: "get",
    url: "/organizations/" + uuid_organization + "/products",
  });
};

export const getProductsById = (uuid_product) => {
  return client({
    method: "get",
    url: "/products/" + uuid_product,
  });
};

export const getProductsAllDataById = (uuid_product) => {
    return client({
      method: "get",
      url: "/products/" + uuid_product+"/info",
    });
  };