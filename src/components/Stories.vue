<template>
  <header class="bg-gray-900 flex p-4 overflow-x-auto -mt-1">
    <ul class="flex items-center justify-center text-center">
      <li class="flex flex-col items-center">
        <div
          class="bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full p-1 relative w-max"
        >
          <a
            href="#"
            class="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300"
          >
            <img
              class="h-12 w-12 rounded-full"
              src="https://i.ibb.co/yhh0Ljy/profile.jpg"
              alt="image"
            />
          </a>
          <button
            class="transition duration-500 absolute bottom-0 right-0 bg-blue-700 h-8 w-8 rounded-full text-white text-normal font-semibold border-4 border-white flex justify-center items-center hover:bg-blue-900"
          >
            +
          </button>
        </div>
        <p class="text-xs mt-1 text-gray-200">wvirgana</p>
      </li>
      <li class="flex flex-col items-center pl-2 " v-for="story in stories">
        <div class="bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full p-1">
          <a
            class="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300 h-14 w-14"
            href="#"
          >
            <img
              class="rounded-full object-cover w-full h-full"
              :src="story.profileImg"
              alt="image"
            />
          </a>
        </div>
        <p class="text-xs mt-1 w-16 truncate text-gray-200">{{ story.username }}</p>
      </li>
    </ul>
  </header>
</template>

<script>
import ProfileData from "../data";
export default {
  data() {
    return {
      stories: ProfileData,
    };
  },
};
</script>

<style scoped>
header {
  border-radius: 0 0 1.3rem 1.3rem;
}
</style>
