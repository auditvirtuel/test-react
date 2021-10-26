import { loginUser, getUsers } from "./user";
import {
  getProductsByOrganizationId,
  getProductsById,
  getProductsAllDataById,
} from "./product";
import { getAllOrganizations, getOrganizationById } from "./organization";

export const API = {
  product: {
    getByOrganizationId: getProductsByOrganizationId,
    getById: getProductsById,
    getAllDataById: getProductsAllDataById,
  },
  user: {
    login: loginUser,
    getUsers: getUsers,
  },
  organization: {
    getById: getOrganizationById,
    getAll: getAllOrganizations,
  },
};
