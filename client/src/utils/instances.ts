import { baseURL } from "@/API/baseURL";
import axios from "axios";

export const usersInstance = axios.create({
  baseURL: `${baseURL}/users`,
  timeout: 1000,
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
});
