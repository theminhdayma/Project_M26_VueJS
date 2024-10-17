import { store } from "@/store";
import { mutations, type MutationsModuleAType } from "./mutations";
import type { User } from "@/interfaces/UserType";
import { actions } from "./actions";

export interface UsersState {
  data: User[];
  loading: boolean;
  err: ApiError | null;
}

// Định nghĩa kiểu lỗi
export interface ApiError {
  message: string;
  code?: number;
}

// Định nghĩa kiểu cho mutations----------------------------------------

// Hàm commit với kiểu hóa cho mutations
export function commitModuleA<K extends keyof MutationsModuleAType>(
  key: K,
  payload?: Parameters<MutationsModuleAType[K]>[1]
) {
  store.commit(key, payload);
}

export const usersModule = {
  namespaced: true,
  /*
  Tránh xung đột tên giữa các module: Khi bạn sử dụng Vuex với nhiều module, có thể bạn sẽ có nhiều actions, mutations, hoặc getters có cùng tên trong các module khác nhau. Nếu không sử dụng namespaced, các tên này sẽ xung đột với nhau.
  */
  state: (): UsersState => ({
    data: [],
    loading: false,
    err: null,
  }),
  mutations: mutations,
  actions: actions,
  getters: {},
};
