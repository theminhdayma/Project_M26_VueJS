<script setup lang="ts">
import { onMounted } from "vue";
import type { RootState } from "./store";
import { commitModuleA } from "./store/modules/users";
import { useStore } from "vuex";


const store = useStore<RootState>();

onMounted(() => {
  store.dispatch("users/fetchUsers"); // Gọi action từ module users, lí do : sử dụng namespaced
});

</script>

<template>
  <div>
    App
    <ul>
      <li v-for="user in store.state.users.data" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
