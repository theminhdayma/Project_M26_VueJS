import { usersInstance } from "../../utils/instances";
import baseURL from "../baseURL";

export const getAllUser = async () => {
  try {
    const res = await usersInstance.get(`${baseURL}/userList`);  // Lấy dữ liệu từ API userList
    return res.data;
  } catch (err) {
    alert(err);
  }
};
