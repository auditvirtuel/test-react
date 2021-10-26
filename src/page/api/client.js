const axios = require("axios");

const { REACT_APP_HTTP_API_BASE_URL } = process.env;

export const client = axios.create({
  baseURL: REACT_APP_HTTP_API_BASE_URL,
  timeout: 2000,
  responseType: "json",
});
