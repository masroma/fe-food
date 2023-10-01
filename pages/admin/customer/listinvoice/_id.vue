<template>
    <div class="bg-white shadow-lg p-5 py-10">
     <div class="flex justify-between">
      <p class="text-lg font-semibold">Rincian Tagihan</p>
      <nuxt-link :to="{name: 'admin-customer'}" class="bg-blue-500 py-2 text-white rounded cursor-pointer px-5 flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          
  
        Kembali</nuxt-link>
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
  
              <th class="border p-2">No Invoice</th>
              <th class="border p-2">Customer Nama</th>
              <th class="border p-2">Grand Total</th>
              <th class="border p-2">Status Payment</th>
              <th class="border p-2">#</th>
            </tr>
          </thead>
          <tbody>
  
  
            <tr class="bg-white" v-for="row in invoices.data" :key="row.id">
                <td class="border p-2">{{ row.invoice }}</td>
                <td class="border p-2">{{ row.customer.name }}</td>
              <td class="border p-2"> Rp. {{ formatPrice(row.grand_total) }}</td>
              <td class="border p-2">
                <button v-if="row.status == 'pending'" class="bg-blue-900 px-2 py-1 rounded text-white"><i class="fa fa-circle-notch fa-spin"></i> {{ row.status }}</button>
                    <button v-if="row.status == 'success'" class="bg-green-900 px-2 py-1 rounded"><i class="fa fa-check-circle"></i> {{ row.status }}</button>
                    <button v-if="row.status == 'expired'" class="bg-yellow-900 px-2 py-1 rounded"><i class="fa fa-exclamation-triangle"></i> {{ row.status }}</button>
                    <button v-if="row.status == 'failed'" class="bg-red-900 px-2 py-1 rounded"><i class="fa fa-times-circle"></i> {{ row.status }}</button>
              </td>
              <td class="border p-2">
               <div class="flex gap-2">
                <nuxt-link :to="{name: 'admin-invoices-show-id', params: {id: row.id}}" class="bg-black py-2 text-white rounded cursor-pointer px-3 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      </nuxt-link>
  
               </div>
  
              </td>
            </tr>
            <!-- Tambahkan baris lainnya di sini -->
          </tbody>
        </table>
  
        <div class="flex justify-between mt-10">
          <p>Menampilkan {{invoices.to}} dari {{invoices.total}}</p>
          <ul class="flex space-x-2">
              <!-- Tombol "Previous" -->
              <li >
                  <a v-if="invoices.current_page != 1" @click="changePage(invoices.current_page - 1)" class="px-4 py-2 bg-blue-500 text-white rounded-l-md cursor-pointer">Previous</a>
  
                  <a v-if="invoices.current_page === 1"  class="px-4 py-2 bg-blue-300 bg-blue-300 text-white rounded-l-md">Previous</a>
              </li>
  
              <!-- Halaman-halaman -->
              <li v-for="page in invoices.links" :key="page.label">
                <a  @click="changePage(page.label)" class="px-4 py-2 bg-white border border-gray-300 cursor-pointer"  v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;' &&  page.active === false">{{ page.label }}</a>
  
                <a  @click="changePage(page.label)" class="px-4 py-2 bg-blue-500 text-white border border-gray-300"  v-if="page.label != '&laquo; Previous' && page.label != 'Next &raquo;' &&  page.active === true">{{ page.label }}</a>
              </li>
  
  
              <!-- Tombol "Next" -->
              <li>
                  <a @click="changePage(invoices.current_page + 1)" v-if="invoices.current_page != invoices.last_page" class="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-r-md">Next</a>
  
                  <a  v-if="invoices.current_page === invoices.last_page" class="px-4 py-2 bg-blue-300 text-white rounded-r-md">Next</a>
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
        title: "invoices - Administrator",
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
  
    async asyncData({ store, route }) {
      await store.dispatch("admin/invoice/getInvoicesDataByCustomer",  { 
        id: route.params.id,
          pencarian:"",
          jumlahperpage: ""
        });
    },
  
    // computed
    computed: {
      // invoices
      invoices() {
        return this.$store.state.admin.invoice.invoicecustomer;
      },
    },
  
    methods: {
      changePerPage() {
        // Mengatur halaman ke 1 menggunakan commit di Vuex
        this.$store.commit("admin/invoice/SET_PAGE", 1);
  
        // Memanggil aksi dengan dispatch di Vuex
        this.$store.dispatch("admin/invoice/getInvoicesDataByCustomer", {
            id: route.params.id,
          pencarian: this.search,
          jumlahperpage: this.perPage,
        });
      },
  
      // Metode pencarian yang Anda tambahkan sebelumnya
      searchData() {
        // Memanggil aksi pencarian di Vuex dengan search term yang sesuai
        this.$store.dispatch("admin/invoice/getInvoicesDataByCustomer", {
            id: route.params.id,
          pencarian: this.search,
          jumlahperpage: this.perPage,
        });
      },
  
      changePage(page){
        this.$store.dispatch("admin/invoice/getInvoicesDataByCustomer", {
          pencarian: this.search,
          id: route.params.id,
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
                .dispatch("admin/invoice/destroy", id)
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
                    name: "admin-invoices",
                  });
                });
            }
          });
      }
    },
  };
  </script>
  