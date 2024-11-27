import type { ApiError, UsersState } from ".";

export interface MutationsModuleAType {
  setUsers: (state: UsersState, users: any) => void;
}

export const mutations = {
  // Cập nhật danh sách người dùng vào state
  setUsers(state: UsersState, users: any) {
    state.data = users;
  },
  // Cập nhật trạng thái loading
  setLoading(state: UsersState, isLoading: boolean) {
    state.loading = isLoading;
  },
  // Cập nhật lỗi nếu có
  setErr(state: UsersState, err: ApiError | null) {
    state.err = err;
  },
};
