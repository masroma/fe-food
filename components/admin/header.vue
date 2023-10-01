<template>

    <div class="bg-white shadow-lg w-full  flex items-center justify-between p-3 px-6 shadow-sm border-b-[1px]">
      <!-- Navbar content -->
      <span class="flex items-center  w-64 justify-between">
        <div class="logo flex items-center gap-2">

          <span class="text-lg">Toko<span class="font-bold">Kita</span></span>
        </div>
        <div class="bar items-center">
          <div class="hidden lg:block md:block flex items-center">
						<button class="outline-none menu-button">
						<svg class=" w-5 h-5 text-gray-500  "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
          </div>
        </div>
      </span>
    <div class="logout flex items-center gap-2">
      <a @click="logout" class="cursor-pointer flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg> <div class="hidden lg:block md:block">logout</div>
       </a>
       <div class="lg:hidden md:hidden flex items-center">
        <button class="outline-none mobile-menu-button">
        <svg class=" w-5 h-5 text-gray-500  "
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      </div>
    </div>
    </div>

</template>

<style>
/* Gunakan kelas CSS tambahan di sini jika diperlukan */
</style>



<script>
  export default {

    //computed
    computed: {
      user() {
        return this.$auth.user
      }
    },

    //method
    methods: {

      //method "logout"
      async logout() {

        //logout auth
        await this.$auth.logout()

        //redirect route admin login
        this.$router.push({
          name: 'admin-login'
        })

      }

    }

  }
</script>

<style>

</style>
