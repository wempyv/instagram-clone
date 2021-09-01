<template>
  <div class="flex flex-col max-h-screen">
    <Header />
    <main class="flex-1 overflow-y-scroll pb-16">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
};
</script>
