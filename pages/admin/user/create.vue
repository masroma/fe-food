<template>
  <div class="bg-white shadow-lg p-5 py-10">
    <div class="flex justify-between">
      <p class="text-lg font-semibold">Tambah User</p>
    </div>
    <div class="container mx-auto my-5" v-if="!showLoader">
      <form @submit.prevent="storeUser">
        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Nama User</label
          >
          <input
            type="text"
            id="name"
            name="name"
            v-model="user.name"
            :class="['shadow appearance-none border', validation.name ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Nama "
          />
          <span class="text-red-700" v-if="validation.name">
            {{ validation.name[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama kategori" class="block text-gray-700 text-sm mb-2"
            >Email</label
          >
          <input
            type="text"
            id="name"
            name="name"
            v-model="user.email"
            :class="['shadow appearance-none border', validation.email ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Email"
          />
          <span class="text-red-700" v-if="validation.email">
            {{ validation.email[0] }}</span
          >
        </div>

        <div class="flex flex-col mb-4">
         <div class="flex gap-2 items-center">
          <label for="nama kategori" class="block text-gray-700 text-sm"
          >Password</label
        >
        <span @click="togglePasswordVisibility('password')">
          <i v-if="passwordVisible.password" class="fa fa-eye "></i>
          <i v-else class="fa fa-eye-slash"></i>
        </span>
         </div>
          <input
          :type="passwordInputType"
            id="name"
            name="name"
            v-model="user.password"
            :class="['shadow appearance-none border', validation.password ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Password"
          />
          <span class="text-red-700" v-if="validation.password">
            {{ validation.password[0] }}</span
          >



        </div>

        <div class="flex flex-col mb-4">
        <div class="flex gap-2">
          <label for="nama kategori" class="block text-gray-700 text-sm"
          >Password Confirmation</label
        >
        <span @click="togglePasswordVisibility('password_confirmation')">
          <i v-if="passwordVisible.password_confirmation" class="fa fa-eye "></i>
          <i v-else class="fa fa-eye-slash"></i>
        </span>
        </div>
          <input
          :type="passwordConfirmationInputType"
            id="name"
            name="name"
            v-model="user.password_confirmation"
            :class="['shadow appearance-none border', validation.password_confirmation ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Password Confirmation"
          />
          <span class="text-red-700" v-if="validation.password_confirmation">
            {{ validation.password_confirmation[0] }}</span
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
            <span v-if="isLoading">Loading...</span>
            <span v-else>Simpan</span>

          </button>
          <nuxt-link
            :to="{ name: 'admin-user' }"
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
      user: {
        name: "",
        email: "",
        password: '',
        password_confirmation: '',
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
  mounted() {

    setTimeout(() => {
      this.showLoader = false;
    }, 1500);


  },

  computed: {
    passwordInputType() {
      return this.passwordVisible.password ? 'text' : 'password';
    },
    passwordConfirmationInputType() {
      return this.passwordVisible.password_confirmation ? 'text' : 'password';
    },
},
  methods: {
    async storeUser() {
      //define formData
      let formData = new FormData();

      formData.append("name", this.user.name);
      formData.append("email", this.user.email);
      formData.append('password', this.user.password)
      formData.append('password_confirmation', this.user.password_confirmation)

      //sending data to action "storeCategory" vuex
      await this.$store
        .dispatch("admin/user/storeUser", formData)

        //success
        .then(() => {
          //sweet alert
          this.$swal.fire({
            title: "BERHASIL!",
            text: "Data Berhasil Disimpan!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          //redirect route "admin-categories"
          this.$router.push({
            name: "admin-user",
          });
        })

        //error
        .catch((error) => {
          //assign error to state "validation"
          this.validation = error.response.data;
        });
    },

    togglePasswordVisibility(inputType) {
      this.passwordVisible[inputType] = !this.passwordVisible[inputType];
    },
  },
};
</script>
