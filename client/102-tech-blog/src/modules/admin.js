import axios from "./http";

export const adminLogin = async (adminUsername, adminPassword) => {
  return axios.post("/app/login", { adminUsername, adminPassword });
};
