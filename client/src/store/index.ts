import { createStore } from "vuex";
import { usersModule, type UsersState } from "./modules/users";

export interface RootState {
  users: UsersState;
}

//store
export const store = createStore({
  modules: {
    users: usersModule,
  },
});
