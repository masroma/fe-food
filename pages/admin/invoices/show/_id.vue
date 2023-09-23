<template>
    <div class="bg-white shadow-lg p-5 py-10">
      <div class="flex justify-between">
        <p class="text-lg font-semibold">Detail Tagihan</p>
      </div>
      <div class="container mx-auto my-5" v-if="!showLoader">
        <div class="row flex justify-between">
           <div class="no-invoice">
            NO. INVOICE : <span class="font-weight ml-1 font-bold">{{ invoice.invoice }}</span><br/>
            Alamat Tagihan : {{ invoice.address }}<br/>
            Jumlah Tagihan :   Rp. {{ formatPrice(invoice.grand_total)  }}<br/>
            Status :  <button v-if="invoice.status == 'pending'" class="bg-blue-900 px-3 text-xs py-1 rounded text-white">{{ invoice.status }}</button>
            <button v-if="invoice.status == 'success'" class="bg-green-900 px-3 text-xs py-1 rounded"> {{ invoice.status }}</button>
            <button v-if="invoice.status == 'expired'" class="bg-yellow-900 px-3 text-xs py-1 rounded"> {{ invoice.status }}</button>
            <button v-if="invoice.status == 'failed'" class="bg-red-900 px-3 text-xs py-1 rounded"> {{ invoice.status }}</button>
           </div>
           <div class="customer">
            Nama Penerima :  {{ invoice.name }} <br/>
            No Kontak : {{ invoice.phone }} <br/>
            COURIER / SERVICE / COST : {{ invoice.courier }} / {{ invoice.courier_service }} / Rp.
            {{ formatPrice(invoice.courier_cost)  }} <br/>
            Kota :  {{ invoice.city.name }}
            Provinsi : {{ invoice.province.name }}<br/>
            
           </div>
        </div>

        <div class="mt-5">
            <table class="min-w-full border-collapse border border-gray-300">
            <tbody>

              <tr v-for="order in invoice.orders" :key="order.id" style="background: #edf2f7;">
                <td class="b-none" width="25%">
                  <div class="wrapper-image-cart">
                    <img  :src="`${imageUrl}/products/${order.product.image}`" style="width: 100%;border-radius: .5rem">
                  </div>
                </td>
                <td class="b-none" width="50%">
                  <h5><b>{{ order.product.title }}</b></h5>
                  <table class="table-borderless" style="font-size: 14px">
                    <tr>
                      <td style="padding: .20rem">QTY</td>
                      <td style="padding: .20rem">:</td>
                      <td style="padding: .20rem"><b>{{ order.qty }}</b></td>
                    </tr>
                  </table>
                </td>
                <td class="b-none text-right">
                  <p class="m-0 font-weight-bold">Rp. {{ formatPrice(order.price) }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-5 flex">
            <nuxt-link
            :to="{ name: 'admin-invoices' }"
            class="bg-red-500 py-2 text-white rounded cursor-pointer flex gap-2 px-5 item-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Kembali</nuxt-link
          >
        </div>
      </div>
      <div v-if="showLoader">
        <div class="my-3 flex flex-col gap-2">
          <content-loader :height="10" ></content-loader>
          <content-loader :height="20"  ></content-loader>
        </div>
        <div class="my-3 flex flex-col gap-2">
          <content-loader :height="10" ></content-loader>
          <content-loader :height="20"  ></content-loader>
        </div>
        <div class="my-3 flex gap-2">
          <content-loader :height="10" ></content-loader>
          <content-loader :height="10"  ></content-loader>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ContentLoader } from "vue-content-loader";
  
  export default {
    layout: "admin",
    components: {
      ContentLoader,
    },
    
    //hook "asyncData"
    async asyncData({ store, route }) {
      await store.dispatch('admin/invoice/getDetailInvoice', route.params.id)
    },

    //computed
    computed: {
      invoice() {
        return this.$store.state.admin.invoice.invoice
      },
      imageUrl() {
            return process.env.imageUrl;
        },
    },
  
  };
  </script>
  