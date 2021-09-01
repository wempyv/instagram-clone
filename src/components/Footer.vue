<template>
  <footer class="grid grid-cols-5 bg-gray-900 rounded-t-2xl absolute bottom-0 w-full">
    <router-link
      v-for="(route, i) in routes"
      :key="i"
      :to="route.path"
      :class="`p-4 text-center text-2xl ${
        route.name == $route.name ? 'text-white' : 'text-gray-600'
      }`"
    >
      <i :class="route.iconClass"></i>
    </router-link>
  </footer>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const routes = ref([]);
    const router = useRouter();

    onBeforeMount(() => {
      routes.value = router.options.routes.filter((r) => r.mainMenu);
    });

    return {
      routes,
    };
  },
};
</script>
