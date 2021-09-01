<template>
  <div
    class="m-4 p-4 bg-gray-900 flex flex-col justify-center rounded-xl"
    v-for="post in posts"
  >
    <div class="flex flex-col">
      <img
        class="rounded-xl object-cover"
        :src="post.postImage"
        alt=""
      />
      <p class="text-white text-sm mt-2">{{post.caption}}</p>
    </div>
    <div class="flex justify-between mt-4">
      <div class="flex items-center">
        <div class="user-image">
          <img
            :src="post.userImg"
            class="h-10 rounded-full w-10 object-cover"
          />
        </div>
        <div class="username ml-2">
          <p class="text-sm text-white">{{post.username}}</p>
          <p class="text-xs text-gray-500">{{post.timeStamp}}</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex comment">
          <p class="text-xs text-gray-500">{{post.comments}}</p>
          <i class="far fa-comment ml-1 text-gray-400 fa-lg"></i>
        </div>
        <div class="likes flex ml-3">
          <p class="text-xs text-gray-500">{{post.likes}}</p>
          <i class="fas fa-heart text-red-500 ml-1 fa-lg"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostData from "../dataPost";
export default {
  data() {
    return {
      posts: PostData,
    };
  },
};
</script>
