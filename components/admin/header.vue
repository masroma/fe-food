<template>

    <div class="bg-white shadow-lg w-full  flex items-center justify-between p-3 px-10 shadow-sm border-b-[1px]">
      <!-- Navbar content -->
      <span class="flex items-center gap-2"><img class="rounded-full w-10"
        :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=4e73df&amp;color=ffffff&amp;size=100`"> {{ user.name }}</span>
     <a @click="logout" class="cursor-pointer flex gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg> logout
     </a>

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
