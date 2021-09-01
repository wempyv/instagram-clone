<template>
  <div class="flex overflow-scroll p-4" >
    <div class="h-44 w-44 bg-gray-800 rounded-xl mr-4" v-for="data in dataFollowers">
      <div>
        <img
          :src="data.headerImg"
          alt=""
          class="h-16 w-full object-cover rounded-t-xl z-0"
        />
      </div>
      <img
        :src="data.profileImg"
        alt=""
        class="rounded-full h-14 w-14 object-cover z-10 -mt-8 m-auto"
      />
      <div class="text-center">
        <p class="text-sm text-white">{{data.name}}</p>
        <p class="text-xs text-gray-500">{{data.job}}</p>
      </div>
      <button
        class="bg-blue-700 text-sm text-white h-9 w-44  rounded-xl mt-4 hover:bg-blue-900 focus:outline-none block m-auto"
      >
        Follow
      </button>
    </div>
  </div>
</template>

<script>
import dataFollowers from "../dataFollowers";
export default {
  data() {
    return {
      dataFollowers: dataFollowers,
    };
  },
};
</script>
>
