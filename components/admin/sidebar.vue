<template>
  <aside class="bg-white shadow-lg text-blue-900 w-80 flex-shrink-0 py-6 px-3 ml-10 mt-5 mr-5 radius shadow-sm border-b-[1px] ">
    <ul class="space-y-2">
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2 text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'produk' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
        <a href="#" class="text-blue-900 hover:text-blue-600"  @click="setActiveMenu('produk')">Produk</a>
      </li>
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'kategori' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>

        <a href="#" class="text-blue-900 hover:text-blue-600"  @click="setActiveMenu('kategori')">Kategori</a>
      </li>
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'order' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>

        <a href="#" class="text-blue-900 hover:text-blue-600"  @click="setActiveMenu('order')">Order</a>
      </li>
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'invoice' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>


        <a href="#" class="text-blue-900 hover:text-blue-600"  @click="setActiveMenu('invoice')">Invoice</a>
      </li>
    </ul>
  </aside>
</template>


<script>
export default {
  data() {
    return {
      activeMenu: null,
    };
  },
  methods: {
    setActiveMenu(menu) {
      alert(menu)
      this.activeMenu = menu;
    },
  },
};
</script>
