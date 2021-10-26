import { client } from "./client";

export const getOrganizationById = (uuid_organization) => {
  return client({
    method: "get",
    url: "/organizations/" + uuid_organization,
  });
};

export const getAllOrganizations = () => {
    return client({
      method: "get",
      url: "/organizations/",
    });
  };