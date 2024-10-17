import type { ActionContext } from "vuex";
import type { UsersState } from ".";
import type { RootState } from "@/store";
import { getAllUser } from "@/API/users/getAll";

export const actions = {
  async fetchUsers({ commit }: ActionContext<UsersState, RootState>) {
    //bật trạng thái tải dữ liệu trước khi gọi api
    commit("setLoading", true);
    try {
      const users = await getAllUser();
      commit("setUsers", users); // Gọi mutation sau khi có dữ liệu
    } catch (error) {
      commit("setErr", error);
    } finally {
      commit("setLoading", false); //tắt trạng thái sau khi gọi api hoàn tất
    }
  },
};
