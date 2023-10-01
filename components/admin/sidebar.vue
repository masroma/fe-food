<template>
  <aside class="hidden lg:block bg-white shadow-lg text-blue-900 w-64 py-6 px-3 pl-10 radius shadow-sm border-b-[1px] menu h-screen">
    <div class="profile flex flex-col items-center justify-center mb-20 gap-3">
      <img class="rounded-full w-16" :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=4e73df&amp;color=ffffff&amp;size=100`">
      <span class="text-md">{{ user.name }}</span>

    </div>
    <ul class="space-y-2 mt-16">
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'kategori' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>


        <nuxt-link :to="{name: 'admin-dashboard'}" class="text-blue-900 hover:text-blue-600">Dashboard</nuxt-link>
        <!-- <a href="#" class=""  @click="setActiveMenu('kategori')">Kategori</a> -->
      </li>
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2 text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'products' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
        <nuxt-link :to="{name: 'admin-products'}" class="text-blue-900 hover:text-blue-600"  @click="setActiveMenu('produk')">Produk</nuxt-link>
      </li>

      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'categories' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>

        <nuxt-link :to="{name: 'admin-categories'}" class="text-blue-900 hover:text-blue-600">Kategori</nuxt-link>
        <!-- <a href="#" class=""  @click="setActiveMenu('kategori')">Kategori</a> -->
      </li>
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'categories' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>


        <nuxt-link :to="{name: 'admin-slider'}" class="text-blue-900 hover:text-blue-600">Slider</nuxt-link>
        <!-- <a href="#" class=""  @click="setActiveMenu('kategori')">Kategori</a> -->
      </li>
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'invoices' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>

        <nuxt-link :to="{name: 'admin-invoices'}" class="text-blue-900 hover:text-blue-600">Tagihan</nuxt-link>
      </li>
      <li class="py-3 px-4 hover:bg-blue-100 flex gap-2  text-blue-900" :class="{ 'bg-blue-900': activeMenu === 'customer' }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>

        <nuxt-link :to="{name: 'admin-customer'}" class="text-blue-900 hover:text-blue-600">Customer</nuxt-link>
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
  computed: {
      user() {
        return this.$auth.user
      }
    },
  methods: {
    setActiveMenu(menu) {
      alert(menu)
      this.activeMenu = menu;
    },
  },
};
</script>
