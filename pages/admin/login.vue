<template>
  <div class="pb-20 pt-20">
    <div class="container mx-auto grid grid-cols-1 p-5 sm:w-full md:w-4/12">
      <form @submit.prevent="login">
        <div class="bg-white rounded-md p-5">
          <div class="text-xl">
            Selamat datang di <br />
            <span class="font-bold">Admin Toko</span>
          </div>

          <p class="mt-10 text-sm text-gray-400">
            Silahkan masukan data untuk login
          </p>
          <span class="text-red-700" v-if="validation.message">
            {{ validation.message }}</span>

          <div class="mb-5 mt-5">
            <label class="mt-2 text-sm text-gray-500">Alamat Email</label>
            <input
              type="text"
              v-model="user.email"
              @input="clearValidation('email')"
              :class="[
                'mt-2 appearance-none w-full bg-gray-50 border',
                validation.email ? 'border-red-500' : 'border-gray-50',
                'h-7 shadow-sm placeholder-gray-300 focus:outline-none focus:placeholder-gray-300 focus:bg-white focus-within:text-gray-600 p-5',
              ]"
              placeholder="Alamat Email"
            />

            <span class="text-red-700" v-if="validation.email">
              {{ validation.email[0] }}</span
            >
          </div>

          <div class="mb-5">
            <label class="mt-2 text-sm text-gray-500">Password</label>
            <input
              type="password"
              v-model="user.password"
              @input="clearValidation('password')"
              :class="[
                'mt-2 appearance-none w-full bg-gray-50 border',
                validation.password ? 'border-red-500' : 'border-gray-50',
                'h-7 shadow-sm placeholder-gray-300 focus:outline-none focus:placeholder-gray-300 focus:bg-white focus-within:text-gray-600 p-5',
              ]"
              placeholder="Password"
            />

            <span class="text-red-700" v-if="validation.password">
              {{ validation.password[0] }}</span>
          </div>

          <div>
            <button
              class="bg-blue-900 py-2 px-3 text-white rounded-md shadow-md text-xl inline-block w-full focus:outline-none focus:bg-gray-900 mt-10" :disabled="isLoading" 
            >
              <span v-if="isLoading">Loading...</span> <!-- Menampilkan teks "Loading..." saat isLoading true -->
              <span v-else>Masuk</span> <!-- Menampilkan teks "Masuk" saat isLoading false -->
            </button>
          </div>
        </div>
      </form>

      <div class="text-center mt-5">
        Tidak bisa masuk ?
        <router-link :to="{ name: 'register' }" class="text-blue-900 font-bold"
          >Lupa Password
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //middleware
  middleware: "authenticated",

  //layout
  layout: "auth",

  setup() {
    // Use it like you would use this.$toast
  },

  //meta
  head() {
    return {
      title: "Login - Administrator",
    };
  },

  data() {
    return {
      //state user
      user: {
        email: "",
        password: "",
      },
      //validation
      validation: [],
      isLoading: false 
    };
  },

  methods: {
    clearValidation(field) {
      if (this.validation[field]) {
        this.validation[field] = null;
      }
    },
    async login() {
      this.isLoading = true;
      await this.$auth
        .loginWith("admin", {
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        })

        .then(() => {
          //redirect
          this.$router.push({
            name: "admin-dashboard",
          });
        })

        .catch((error) => {
          //assign validation
          this.isLoading = false;
          this.validation = error.response.data;
        });
    },
  },
};
</script>
