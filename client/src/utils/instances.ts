
import axios from "axios";
import baseURL from "../API/baseURL";

export const usersInstance = axios.create({
  baseURL: `${baseURL}/users`,
  timeout: 5000,
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
});

