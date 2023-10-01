<template>
  <div>

      <!-- Navbar -->
      <Header />


      <!-- Left Menu -->
    <div class="flex mb-5">
      <Sidebar />

      <!-- Right Content -->
      <main class="flex-grow p-6">
        <!-- Right content -->
        <Nuxt />
      </main>
    </div>


  </div>
</template>


<script>

  import Header from '@/components/admin/header.vue'
  import Sidebar from '@/components/admin/sidebar.vue'

  export default {

    mounted() {
    const btn = document.querySelector("button.menu-button");
    const menu = document.querySelector(".menu");

    btn.addEventListener("click", () => {
      // Memeriksa apakah elemen memiliki kelas "lg:block"
      const hasLGBlockClass = menu.classList.contains("lg:block");

      // Jika elemen memiliki kelas "lg:block", maka hilangkan kelas tersebut
      // Jika tidak, tambahkan kelas tersebut
      if (hasLGBlockClass) {
        menu.classList.remove("lg:block");
      } else {
        menu.classList.add("lg:block");
      }
    });

    const btnm = document.querySelector("button.mobile-menu-button");
    const menus = document.querySelector(".menu");

    btnm.addEventListener("click", () => {
      // Memeriksa apakah elemen memiliki kelas "hidden"
      const hasHiddenClass = menus.classList.contains("hidden");

      // Jika elemen memiliki kelas "hidden", maka hilangkan kelas tersebut
      // Jika tidak, tambahkan kelas tersebut
      if (hasHiddenClass) {
        menus.classList.remove("hidden");
      } else {
        menus.classList.add("hidden");
      }
    });
  },

    //middleware
    middleware: 'isAdmin',

    //register components
    components: {
      Header,
      Sidebar
    }

  }
</script>
