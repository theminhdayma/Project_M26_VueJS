import type { ActionContext } from "vuex";
import type { UsersState } from ".";
import { getAllUser } from "../../../API/users/getAll";
import { RootState } from "../../store";

export const actions = {
  // Action lấy danh sách người dùng
  async fetchUsers({ commit }: ActionContext<UsersState, RootState>) {
    commit("setLoading", true);
    try {
      const users = await getAllUser();  // Gọi API để lấy danh sách users
      commit("setUsers", users);  // Lưu danh sách vào state
    } catch (error) {
      commit("setErr", error);  // Xử lý lỗi
    } finally {
      commit("setLoading", false);
    }
  },
};
