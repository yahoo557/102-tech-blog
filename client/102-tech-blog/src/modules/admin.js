import axios from "./axios";

export const adminLogin = async (adminUsername, adminPassword) => {
  return axios.post("/app/login", { adminUsername, adminPassword });
};
