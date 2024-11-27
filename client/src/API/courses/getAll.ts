import { usersInstance } from "../../utils/instances";
import baseURL from "../baseURL";

export const getAllCourses = async () => {
  try {
    const res = await usersInstance.get(`${baseURL}/courses`);  // Lấy dữ liệu từ API userList
    return res.data;
  } catch (err) {
    alert(err);
  }
};
