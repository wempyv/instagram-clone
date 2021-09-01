<template>
  <div class="home">
    <Stories />
    <PostContent />
    <NewFollowers />
  </div>
</template>
<script>
import PostContent from "../components/PostContent.vue";
import Stories from "../components/Stories.vue";
import NewFollowers from "../components/NewFollowers.vue";
export default {
  components: {
    PostContent,
    Stories,
    NewFollowers,
  },
};
</script>
