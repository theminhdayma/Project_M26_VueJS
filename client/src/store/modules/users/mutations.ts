import type { User } from "@/interfaces/UserType";
import type { ApiError, UsersState } from ".";

export interface MutationsModuleAType {
  setUsers: (state: UsersState, users: User[]) => void;
}

export const mutations = {
  setUsers(state: UsersState, users: User[]) {
    state.data = users;
  },
  setLoading(state: UsersState, isLoading: boolean) {
    state.loading = isLoading;
  },
  setErr(state: UsersState, err: ApiError | null) {
    state.err = err;
  },
};
