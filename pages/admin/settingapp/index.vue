<template>
  <div class="bg-white shadow-lg p-5 py-10">
    <div class="flex justify-between">
      <p class="text-lg font-semibold">Setting App</p>
    </div>
    <div class="container mx-auto my-5" v-if="!showLoader">
      <form @submit.prevent="updateSettingapp">
        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Title</label
          >
          <input
            type="text"

            v-model="settingapp.title"
            :class="['shadow appearance-none border', validation.title ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Nama Outlet"
          />
          <span class="text-red-700" v-if="validation.title">
            {{ validation.title[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">

          <img :src="settingapp.logo" class="w-20" />
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Logo Outlet</label
          >
          <input
            type="file"
            @change="handleFileChange"

            :class="['shadow appearance-none border', validation.logo ? 'border-red-500' : 'border','rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"

          />
          <span class="text-red-700" v-if="validation.logo">
            {{ validation.logo[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >RAJAONGKIR API KEY</label
          >
          <input
            type="text"

            v-model="settingapp.RAJAONGKIR_API_KEY"
            :class="['shadow appearance-none border', validation.RAJAONGKIR_API_KEY ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Rajaongkir Api Key"
          />
          <span class="text-red-700" v-if="validation.RAJAONGKIR_API_KEY">
            {{ validation.RAJAONGKIR_API_KEY[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >MIDTRANS SERVERKEY</label
          >
          <input
            type="text"

            v-model="settingapp.MIDTRANS_SERVERKEY"
            :class="['shadow appearance-none border', validation.MIDTRANS_SERVERKEY ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="MIDTRANS SERVERKEY"
          />
          <span class="text-red-700" v-if="validation.MIDTRANS_SERVERKEY">
            {{ validation.MIDTRANS_SERVERKEY[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >MIDTRANS CLIENTKEY</label
          >
          <input
            type="text"

            v-model="settingapp.MIDTRANS_CLIENTKEY"
            :class="['shadow appearance-none border', validation.MIDTRANS_CLIENTKEY ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="MIDTRANS CLIENTKEY"
          />
          <span class="text-red-700" v-if="validation.MIDTRANS_CLIENTKEY">
            {{ validation.MIDTRANS_CLIENTKEY[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >ZENZIVA USERKEY</label
          >
          <input
            type="text"

            v-model="settingapp.ZENZIVA_USERKEY"
            :class="['shadow appearance-none border', validation.ZENZIVA_USERKEY ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="MIDTRANS CLIENTKEY"
          />
          <span class="text-red-700" v-if="validation.ZENZIVA_USERKEY">
            {{ validation.ZENZIVA_USERKEY[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >ZENZIVA PASSKEY</label
          >
          <input
            type="text"

            v-model="settingapp.ZENZIVA_PASSKEY"
            :class="['shadow appearance-none border', validation.ZENZIVA_PASSKEY ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="MIDTRANS CLIENTKEY"
          />
          <span class="text-red-700" v-if="validation.ZENZIVA_PASSKEY">
            {{ validation.ZENZIVA_PASSKEY[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Email Outlet</label
          >
          <input
            type="text"

            v-model="settingapp.email_outlet"
            :class="['shadow appearance-none border', validation.email_outlet ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Email Outlet"
          />
          <span class="text-red-700" v-if="validation.email_outlet">
            {{ validation.email_outlet[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Email Outlet</label
          >
          <input
            type="text"

            v-model="settingapp.email_outlet"
            :class="['shadow appearance-none border', validation.email_outlet ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Email Outlet"
          />
          <span class="text-red-700" v-if="validation.email_outlet">
            {{ validation.email_outlet[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Whatsapp Outlet</label
          >
          <input
            type="text"

            v-model="settingapp.whatsapp_outlet"
            :class="['shadow appearance-none border', validation.whatsapp_outlet ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Email Outlet"
          />
          <span class="text-red-700" v-if="validation.whatsapp_outlet">
            {{ validation.whatsapp_outlet[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Alamat Outlet</label
          >
          <input
            type="text"

            v-model="settingapp.alamat_outlet"
            :class="['shadow appearance-none border', validation.alamat_outlet ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Email Outlet"
          />
          <span class="text-red-700" v-if="validation.alamat_outlet">
            {{ validation.alamat_outlet[0] }}</span
          >
        </div>

        <div class="flex gap-3">
          <button
            type="submit"
            class="bg-blue-500 py-2 text-white rounded cursor-pointer flex gap-2 px-5 item-center"
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
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>

            Simpan
          </button>

        </div>
      </form>
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
  data() {
    return {
      settingapp: {
        id: "",
        title: "",
        logo:"",
        RAJAONGKIR_API_KEY:"",
        MIDTRANS_SERVERKEY:"",
        MIDTRANS_CLIENTKEY:"",
        ZENZIVA_USERKEY:"",
        ZENZIVA_PASSKEY:"",
        email_outlet:"",
        whatsapp_outlet:"",
        alamat_outlet:""
      },
      //state validation
      validation: [],
      showLoader: true,
      isLoading: false,
      passwordVisible: {
        password: false,
        password_confirmation: false,
      },
    };
  },
  async asyncData({ store, route }) {
        await store.dispatch('admin/settingapp/getDetailSettingapp')
  },



  mounted() {
    this.settingapp.id = this.$store.state.admin.settingapp.settingapp.id
    this.settingapp.title = this.$store.state.admin.settingapp.settingapp.title
    this.settingapp.logo = this.$store.state.admin.settingapp.settingapp.logo
    this.settingapp.RAJAONGKIR_API_KEY = this.$store.state.admin.settingapp.settingapp.RAJAONGKIR_API_KEY
    this.settingapp.MIDTRANS_SERVERKEY = this.$store.state.admin.settingapp.settingapp.MIDTRANS_SERVERKEY
    this.settingapp.MIDTRANS_CLIENTKEY = this.$store.state.admin.settingapp.settingapp.MIDTRANS_CLIENTKEY
    this.settingapp.ZENZIVA_USERKEY = this.$store.state.admin.settingapp.settingapp.ZENZIVA_USERKEY
    this.settingapp.ZENZIVA_PASSKEY = this.$store.state.admin.settingapp.settingapp.ZENZIVA_PASSKEY
    this.settingapp.email_outlet = this.$store.state.admin.settingapp.settingapp.email_outlet
    this.settingapp.whatsapp_outlet = this.$store.state.admin.settingapp.settingapp.whatsapp_outlet
    this.settingapp.alamat_outlet = this.$store.state.admin.settingapp.settingapp.alamat_outlet

    setTimeout(() => {
      this.showLoader = false;
    }, 1500);
  },


  methods: {
    handleFileChange(e) {
      //get image
      let image = (this.settingapp.logo = e.target.files[0]);

      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "category.image" to null
        this.settingapp.logo = null;

        //show sweet alert
        this.$swal.fire({
          title: "OOPS!",
          text: "Format File Tidak Didukung!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    async updateSettingapp() {
      //define formData
      let formData = new FormData();

        formData.append('title', this.settingapp.title)
        formData.append('logo', this.settingapp.logo)
        formData.append('RAJAONGKIR_API_KEY', this.settingapp.RAJAONGKIR_API_KEY)
        formData.append('MIDTRANS_SERVERKEY', this.settingapp.MIDTRANS_SERVERKEY)
        formData.append('MIDTRANS_CLIENTKEY', this.settingapp.MIDTRANS_CLIENTKEY)
        formData.append('ZENZIVA_USERKEY', this.settingapp.ZENZIVA_USERKEY)
        formData.append('ZENZIVA_PASSKEY', this.settingapp.ZENZIVA_PASSKEY)
        formData.append('email_outlet', this.settingapp.email_outlet)
        formData.append('whatsapp_outlet', this.settingapp.whatsapp_outlet)
        formData.append('alamat_outlet', this.settingapp.alamat_outlet)
        formData.append("_method", "PATCH")

      //sending data to action "updateCategory" vuex
      await this.$store
        .dispatch("admin/settingapp/updateSettingapp", {
          settingappId: this.settingapp.id,
          payload: formData
        })

        //success
        .then(() => {
          //sweet alert
          this.$swal.fire({
            title: "BERHASIL!",
            text: "Data Berhasil Diupdate!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          this.validation = {};

          //redirect route "admin-categories"

        })

        //error
        .catch((error) => {
          //assign error to state "validation"
          this.validation = error.response.data;
        });
    },
  },
};
</script>
