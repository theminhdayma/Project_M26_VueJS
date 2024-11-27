import { createStore } from "vuex";
import { usersModule, type UsersState } from "./modules/users";

export interface RootState {
  users: UsersState;
}

// Khởi tạo store với module users
export const store = createStore({
  modules: {
    users: usersModule,
  },
});
