<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <Stories />
    <main class="flex-1 overflow-scroll">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Stories from "./components/Stories.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Stories,
    Footer
  },
};
</script>
