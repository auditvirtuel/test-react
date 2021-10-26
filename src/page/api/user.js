import { client } from "./client";

export const loginUser = (email, password) => {
  return client({
    method: "post",
    url: "/login",
    data: {
      email: email,
      password: password,
    },
  });
};

export const getUsers = (uuid_organization) => {
  return client({
    method: "get",
    url: "/organizations/" + uuid_organization + "/users",
  });
};
