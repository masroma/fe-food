<template>
<div class="container mx-auto grid grid-cols-1 p-5 sm:w-full md:w-5/12">
  <div class="bg-white rounded-md p-1">
    <div class="text-lg font-bold text-gray-600">
      Kedai Mon Mon
    </div>
    <span class="text-gray-400 text-sm flex gap-1 items-center mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      Jl kisamaun no 65
    </span>
  </div>

  <div class="bg-gray-100 rounded-md p-1 mt-3 flex gap-2">
    <input type="text" class="w-100 flex-1 py-1 bg-gray-100 px-2 focus:outline-none" placeholder="Cari makanan yang kamu mau">
    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    </button>
  </div>
 </div>
</template>

<script>
  //import slider


  export default {



    //meta
    head() {
      return {
        title: 'FoodNesia - Aplikasi Food Order No 1 di Indonesia',
        meta: [{
            hid: 'og:title',
            name: 'og:title',
            content: 'FoodNesia - Aplikasi Food Order No 1 di Indonesia'
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: 'FoodNesia - Aplikasi Food Order No 1 di Indonesia'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: '/images/logo.png'
          },
          {
            hid: 'description',
            name: 'description',
            content: 'Aplikasi Food Order No 1 di Indonesia'
          },
        ]
      }
    },

  }
</script>

<style>

</style>
