<script setup lang="ts">
import { onMounted } from "vue";
import type { RootState } from "./store/store";
import { useStore } from "vuex";


const store = useStore<RootState>();

// onMounted(() => {
//   store.dispatch("users/fetchUsers"); // Gọi action từ module users, lí do : sử dụng namespaced
// });

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>
