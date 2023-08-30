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


    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-3">
      <!-- Footer content -->
      Footer
    </footer>
  </div>
</template>


<script>

  import Header from '@/components/admin/header.vue'
  import Sidebar from '@/components/admin/sidebar.vue'

  export default {

    //middleware
    middleware: 'isAdmin',

    //register components
    components: {
      Header,
      Sidebar
    }

  }
</script>
