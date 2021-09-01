<template>
  <div class="m-3 p-4 bg-gray-900 flex flex-col justify-center rounded-xl">
    <div class="flex flex-col">
      <img
        class="rounded-xl"
        src="https://akcdn.detik.net.id/visual/2021/02/09/pemandangan-belitung-1_169.jpeg?w=650"
        alt=""
      />
      <p class="text-white text-sm mt-2">Baru kali ini liat pantai dan sekece ini !!!</p>
    </div>
    <div class="flex justify-between mt-4">
      <div class="flex items-center">
        <div class="user-image">
          <img
            src="https://avatars.githubusercontent.com/u/43679344?v=4"
            class="h-12 rounded-full object-cover"
          />
        </div>
        <div class="username ml-2">
          <p class="text-sm text-white">Wempy Virgana</p>
          <p class="text-xs text-gray-500">25 Maret 2021 10:48</p>
        </div>
      </div>
      <div class="flex items-center">
          <div class="flex comment">
              <p class="text-xs text-gray-500">3k</p>
              <i class="far fa-comment ml-1 text-gray-400 fa-lg"></i>
          </div>
          <div class="likes flex ml-3">
              <p class="text-xs text-gray-500">19.8k</p>
              <i class="fas fa-heart text-red-500 ml-1 fa-lg"></i>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
