<template>
  <div class="bg-white shadow-lg p-5 py-10">
   <div class="flex justify-between">
    <p class="text-lg font-semibold">sliders</p>
    <nuxt-link :to="{name: 'admin-slider-create'}" class="bg-blue-500 py-2 text-white rounded cursor-pointer px-5 flex gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      tambah</nuxt-link>
   </div>

    <div class="container mx-auto my-5" v-if="!showLoader">
      <div class="flex items-center justify-between mb-5">
        <select class="select select-bordered max-w-xs bg-white border p-2" v-model="perPage" @change="changePerPage">

          <option v-for="n in perPageOptions" :key="n">{{n}}</option>

        </select>

        <!-- <div class="flex border p-2">
          <input type="text" placeholder="cari" class="bg-white focus:outline-none" @keypress.enter="searchData" v-model="search">
          <button  @click="searchData"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </button>
        </div> -->
      </div>
      <table class="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border p-2">Image</th>
            <th class="border p-2">Link</th>
            <th class="border p-2 center">#</th>
          </tr>
        </thead>
        <tbody>


          <tr class="bg-white" v-for="row in sliders.data" :key="row.id">

            <td class="border p-2">

              <img

              :src="row.image"
              :alt="row.slug"
              class="h-16"
            >

            </td>
            <td>{{row.link}}</td>
            <td class="border p-2">
             <div class="flex gap-2">


                <button  @click="destroy(row.id)" class="bg-red-500 py-2 text-white rounded cursor-pointer px-3 flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg></button>
             </div>

            </td>
          </tr>
          <!-- Tambahkan baris lainnya di sini -->
        </tbody>
      </table>

      <div class="flex justify-between mt-10">
        <p>Menampilkan {{sliders.to}} dari {{sliders.total}}</p>
        <ul class="flex space-x-2">
            <!-- Tombol "Previous" -->
            <li >
                <a v-if="sliders.current_page != 1" @click="changePage(sliders.current_page - 1)" class="px-4 py-2 bg-blue-500 text-white rounded-l-md cursor-pointer">Previous</a>

                <a v-if="sliders.current_page === 1"  class="px-4 py-2 bg-blue-300 bg-blue-300 text-white rounded-l-md">Previous</a>
            </li>

            <!-- Halaman-halaman -->
            <li v-for="page in sliders.links" :key="page.label">
              <a  @click="changePage(page.label)" class="px-4 py-2 bg-white border border-gray-300 cursor-pointer"  v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;' &&  page.active === false">{{ page.label }}</a>

              <a  @click="changePage(page.label)" class="px-4 py-2 bg-blue-500 text-white border border-gray-300"  v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;' &&  page.active === true">{{ page.label }}</a>
            </li>


            <!-- Tombol "Next" -->
            <li>
                <a @click="changePage(sliders.current_page + 1)" v-if="sliders.current_page != sliders.last_page" class="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-r-md">Next</a>

                <a  v-if="sliders.current_page === sliders.last_page" class="px-4 py-2 bg-blue-300 text-white rounded-r-md">Next</a>
            </li>
        </ul>
    </div>




    </div>
    <div v-if="showLoader">
      <div class="mt-5">
        <div class="flex justify-between gap-10">
          <content-loader :height="20"  ></content-loader>
          <content-loader :height="20"    ></content-loader>
        </div>
       <div class="my-3">
        <content-loader :height="100"    ></content-loader>
       </div>
       <div class="flex justify-between gap-10">
        <content-loader :height="20"  ></content-loader>
        <content-loader :height="20"    ></content-loader>
      </div>
      </div>
  </div>
  </div>
</template>
<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  // layout
  layout: "admin",

  // meta
  head() {
    return {
      title: "sliders - Administrator",
    };
  },

  data() {
    return {
      perPage: 10,
      search: "",
      perPageOptions: [10, 15, 25, 50, 100],
      showLoader: true,
    };
  },

  components: {
            ContentLoader,

  },

  mounted(){
    setTimeout(() => {
      this.showLoader = false;
    }, 1500);
  },

  async asyncData({ store }) {
    await store.dispatch("admin/slider/getSlidersData");
  },

  // computed
  computed: {
    // sliders
    sliders() {
      return this.$store.state.admin.slider.sliders;
    },
  },

  methods: {
    changePerPage() {
      // Mengatur halaman ke 1 menggunakan commit di Vuex
      this.$store.commit("admin/slider/SET_PAGE", 1);

      // Memanggil aksi dengan dispatch di Vuex
      this.$store.dispatch("admin/slider/getSlidersData", {
        pencarian: this.search,
        jumlahperpage: this.perPage,
      });
    },

    // Metode pencarian yang Anda tambahkan sebelumnya
    searchData() {
      // Memanggil aksi pencarian di Vuex dengan search term yang sesuai
      this.$store.dispatch("admin/slider/getSlidersData", {
        pencarian: this.search,
        jumlahperpage: this.perPage,
      });
    },

    changePage(page){
      this.$store.dispatch("admin/slider/getSlidersData", {
        pencarian: this.search,
        jumlahperpage: this.perPage,
        page:page,
      });
    },

    destroy(id){
      this.$swal
        .fire({
          title: "APAKAH ANDA YAKIN ?",
          text: "INGIN MENGHAPUS DATA INI !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "YA, HAPUS!",
          cancelButtonText: "TIDAK",
        })
        .then((result) => {
          if (result.isConfirmed) {
            //dispatch to action "deletepermission" vuex
            this.$store
              .dispatch("admin/slider/destroy", id)
              .then(() => {
                //feresh data
                // this.$nuxt.refresh()

                //alert
                this.$swal.fire({
                  title: "BERHASIL!",
                  text: "Data Berhasil Dihapus!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                });

                this.$router.push({
                  name: "admin-slider",
                });
              });
          }
        });
    }
  },
};
</script>
