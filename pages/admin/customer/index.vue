<template>
    <div class="bg-white shadow-lg p-5 py-10">
     <div class="flex justify-between">
      <p class="text-lg font-semibold">Customer</p>
      <!-- <nuxt-link :to="{name: 'admin-customers-create'}" class="bg-blue-500 py-2 text-white rounded cursor-pointer px-5 flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
  
        tambah</nuxt-link> -->
     </div>
  
      <div class="container mx-auto my-5" v-if="!showLoader">
        <div class="flex items-center justify-between mb-5">
          <select class="select select-bordered max-w-xs bg-white border p-2" v-model="perPage" @change="changePerPage">
  
            <option v-for="n in perPageOptions" :key="n">{{n}}</option>
  
          </select>
  
          <div class="flex border p-2">
            <input type="text" placeholder="cari" class="bg-white focus:outline-none" @keypress.enter="searchData" v-model="search">
            <button  @click="searchData"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
          </div>
        </div>
        <table class="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
  
              <th class="border p-2">Nama</th>
              <th class="border p-2">Email</th>
              <th class="border p-2">Total Transaksi</th>
              <th class="border p-2">Total Nominal Transaksi</th>
              <th class="border p-2">#</th>
            </tr>
          </thead>
          <tbody>
  
  
            <tr class="bg-white" v-for="row in customers.data" :key="row.id">
  
            
              <td class="border p-2">{{ row.name }}</td>
              <td class="border p-2">{{ row.email }}</td>
              <td class="border p-2">{{ row.invoice_count ?? 0}}</td>
              <td class="border p-2">Rp {{ formatPrice(row.grand_total_sum ?? 0)}}</td>
              <td class="border p-2">
               <div class="flex gap-2">
                <nuxt-link v-if="row.invoice_count > 0" :to="{name: 'admin-customer-listinvoice-id', params: {id: row.id}}" class="bg-green-500 py-2 text-white rounded cursor-pointer px-3 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg> History Belanja
                      </nuxt-link>
               </div>
  
              </td>
            </tr>
            <!-- Tambahkan baris lainnya di sini -->
          </tbody>
        </table>
  
        <div class="flex justify-between mt-10">
          <p>Menampilkan {{customers.to}} dari {{customers.total}}</p>
          <ul class="flex space-x-2">
              <!-- Tombol "Previous" -->
              <li >
                  <a v-if="customers.current_page != 1" @click="changePage(customers.current_page - 1)" class="px-4 py-2 bg-blue-500 text-white rounded-l-md cursor-pointer">Previous</a>
  
                  <a v-if="customers.current_page === 1"  class="px-4 py-2 bg-blue-300 bg-blue-300 text-white rounded-l-md">Previous</a>
              </li>
  
              <!-- Halaman-halaman -->
              <li v-for="page in customers.links" :key="page.label">
                <a  @click="changePage(page.label)" class="px-4 py-2 bg-white border border-gray-300 cursor-pointer"  v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;' &&  page.active === false">{{ page.label }}</a>
  
                <a  @click="changePage(page.label)" class="px-4 py-2 bg-blue-500 text-white border border-gray-300"  v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;' &&  page.active === true">{{ page.label }}</a>
              </li>
  
  
              <!-- Tombol "Next" -->
              <li>
                  <a @click="changePage(customers.current_page + 1)" v-if="customers.current_page != customers.last_page" class="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-r-md">Next</a>
  
                  <a  v-if="customers.current_page === customers.last_page" class="px-4 py-2 bg-blue-300 text-white rounded-r-md">Next</a>
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
        title: "customers - Administrator",
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
        await store.dispatch('admin/customer/getCustomersData')
    },
  
    // computed
    computed: {
      // customers
      customers() {
        return this.$store.state.admin.customer.customers
      },
    },
  
    methods: {
      changePerPage() {
        // Mengatur halaman ke 1 menggunakan commit di Vuex
        this.$store.commit("admin/category/SET_PAGE", 1);
  
        // Memanggil aksi dengan dispatch di Vuex
        this.$store.dispatch("admin/category/getcustomersData", {
          pencarian: this.search,
          jumlahperpage: this.perPage,
        });
      },
  
      // Metode pencarian yang Anda tambahkan sebelumnya
      searchData() {
        // Memanggil aksi pencarian di Vuex dengan search term yang sesuai
        this.$store.dispatch("admin/category/getcustomersData", {
          pencarian: this.search,
          jumlahperpage: this.perPage,
        });
      },
  
      changePage(page){
        this.$store.dispatch("admin/category/getcustomersData", {
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
                .dispatch("admin/category/destroy", id)
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
                    name: "admin-customers",
                  });
                });
            }
          });
      }
    },
  };
  </script>
  