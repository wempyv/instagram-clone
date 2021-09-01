<template>
  <div class="home">
    <Stories />
    <PostContent />
  </div>
</template>
<script>
import PostContent from "../components/PostContent.vue";
import Stories from '../components/Stories.vue'
export default {
  components: {
    PostContent,
    Stories
  },
};
</script>
