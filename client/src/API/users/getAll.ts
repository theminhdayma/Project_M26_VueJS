import { baseURL } from "../baseURL";
import { usersInstance } from "@/utils/instances";

export const getAllUser = async () => {
  try {
    const res = await usersInstance.get(`${baseURL}/users`);
    return res.data;
  } catch (err) {
    alert(err);
  }
};
