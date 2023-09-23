<template>
  <div class="bg-white shadow-lg p-5 py-10">
    <div class="flex justify-between">
      <p class="text-lg font-semibold">Tambah Products</p>
    </div>
    <div class="container mx-auto my-5" v-if="!showLoader">
      <form @submit.prevent="storeProduct">
        <div class="flex flex-col mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Nama product</label>
          <input type="text" id="name" name="name" v-model="product.title"
            :class="['shadow appearance-none border', validation.title ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Nama product" />
          <span class="text-red-700" v-if="validation.name">
            {{ validation.name[0] }}</span>
        </div>
        <div class="flex flex-col mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Gambar product</label>
          <div class="flex">
            <div class="w-1/2 pr-2">
              <input type="file" @change="handleFileChange" id="name1" name="name1"
                :class="['shadow appearance-none border', validation.image ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
                placeholder="Nama product 1" />
              <span class="text-red-700" v-if="validation.image">
                {{ validation.image[0] }}</span>
            </div>
            <div class="w-1/2 pl-2">
              <input type="file" @change="handleFileChange1" id="name2" name="name2"
                :class="['shadow appearance-none border', validation.image_1 ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
                placeholder="Nama product 2" />
              <span class="text-red-700" v-if="validation.image_1">
                {{ validation.image_1[0] }}</span>
            </div>
            <div class="w-1/2 pl-2">
              <input type="file" @change="handleFileChange2" id="name2" name="name2"
                :class="['shadow appearance-none border', validation.image_2 ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
                placeholder="Nama product 2" />
              <span class="text-red-700" v-if="validation.image_2">
                {{ validation.image_2[0] }}</span>
            </div>
            <div class="w-1/2 pl-2">
              <input type="file" @change="handleFileChange3" id="name2" name="name2"
                :class="['shadow appearance-none border', validation.image_3 ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
                placeholder="Nama product 2" />
              <span class="text-red-700" v-if="validation.image_3">
                {{ validation.image_3[0] }}</span>
            </div>
            <div class="w-1/2 pl-2">
              <input type="file" @change="handleFileChange4" id="name2" name="name2"
                :class="['shadow appearance-none border', validation.image_4 ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
                placeholder="Nama product 2" />
              <span class="text-red-700" v-if="validation.image_4">
                {{ validation.image_4[0] }}</span>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Category</label>
          <select
            class="py-2 shadow  bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            v-model="product.category_id">
            <option value="">-- select category --</option>
            <option class="flex gap-2" v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
          <span class="text-red-700" v-if="validation.category_id">
            {{ validation.category_id[0] }}</span>
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Berat <span class="text-xs">(dalam
              gram)</span></label>
          <input type="number" id="name" name="name" min="0" v-model="product.weight"
            :class="['shadow appearance-none border', validation.weight ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Berat" />
          <span class="text-red-700" v-if="validation.weight">
            {{ validation.weight[0] }}</span>
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Stock</label>
          <input type="number" id="name" name="name" min="0" v-model="product.stock"
            :class="['shadow appearance-none border', validation.stock ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Stok" />
          <span class="text-red-700" v-if="validation.stock">
            {{ validation.stock[0] }}</span>
        </div>

        <div class="flex flex-col col-12 mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Description</label>
          <client-only placeholder="loading...">
            <ckeditor-nuxt :style="{ width: '100%' }" v-model="product.description" :config="editorConfig" />
          </client-only>
          <span class="text-red-700" v-if="validation.description">
            {{ validation.description[0] }}</span>
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Harga</label>
          <input type="number" id="name" name="name" min="0" v-model="product.price"
            :class="['shadow appearance-none border', validation.price ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Harga" />
          <span class="text-red-700" v-if="validation.price">
            {{ validation.price[0] }}</span>
        </div>

        <div class="flex flex-col mb-4">
          <label for="nama product" class="block text-gray-700 text-sm mb-2">Discount</label>
          <input type="number" id="name" name="name" min="0" v-model="product.discount"
            :class="['shadow appearance-none border', validation.discount ? 'border-red-500' : 'border', 'rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline']"
            placeholder="Dsicount" />
          <span class="text-red-700" v-if="validation.discount">
            {{ validation.discount[0] }}</span>
        </div>

        <div class="flex gap-3">
          <button type="submit" class="bg-blue-500 py-2 text-white rounded cursor-pointer flex gap-2 px-5 item-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>

            Simpan
          </button>
          <nuxt-link :to="{ name: 'admin-products' }"
            class="bg-red-500 py-2 text-white rounded cursor-pointer flex gap-2 px-5 item-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            Kembali</nuxt-link>
        </div>
      </form>
    </div>
    <div v-if="showLoader">
      <div class="my-3 flex flex-col gap-2">
        <content-loader :height="10"></content-loader>
        <content-loader :height="20"></content-loader>
      </div>
      <div class="my-3 flex flex-col gap-2">
        <content-loader :height="10"></content-loader>
        <content-loader :height="20"></content-loader>
      </div>
      <div class="my-3 flex gap-2">
        <content-loader :height="10"></content-loader>
        <content-loader :height="10"></content-loader>
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
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  data() {
    return {
      product: {
        image: "",
        image_1: "",
        image_2: "",
        image_3: "",
        image_4: "",
        name: "",
        weight: "",
        stock: "",
        category_id: "",
        discount: "",
        price: "",
        description: ""
      },
      //state validation
      validation: [],
      showLoader: true,
    };
  },

  async asyncData({ store }) {
    //get list all categories
    await store.dispatch('admin/category/getListAllCategories')
  },
  computed: {
    //categories
    categories() {
      return this.$store.state.admin.category.categoryall
    },
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1500);
  },
  methods: {
    handleFileChange(e) {
      //get image
      let image = (this.product.image = e.target.files[0]);

      //check fileType
      if (!image.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "product.image" to null
        this.product.image = null;

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

    handleFileChange1(e) {
      //get image
      let image1 = (this.product.image_1 = e.target.files[0]);

      //check fileType
      if (!image1.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "product.image" to null
        this.product.image_1 = null;

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

    handleFileChange2(e) {
      //get image
      let image2 = (this.product.image_2 = e.target.files[0]);

      //check fileType
      if (!image2.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "product.image" to null
        this.product.image_2 = null;

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

    handleFileChange3(e) {
      //get image
      let image3 = (this.product.image_3 = e.target.files[0]);

      //check fileType
      if (!image3.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "product.image" to null
        this.product.image_3 = null;

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

    handleFileChange4(e) {
      //get image
      let image4 = (this.product.image_4 = e.target.files[0]);

      //check fileType
      if (!image4.type.match("image.*")) {
        //if fileType not allowed, then clear value and set null
        e.target.value = "";

        //set state "product.image" to null
        this.product.image_4 = null;

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
    async storeProduct() {
      this.isLoading = true;
      //define formData
      let formData = new FormData();

      formData.append('image', this.product.image)
      formData.append('image_1', this.product.image_1)
      formData.append('image_2', this.product.image_2)
      formData.append('image_3', this.product.image_3)
      formData.append('image_4', this.product.image_4)
      formData.append('title', this.product.title)
      formData.append('category_id', this.product.category_id)
      formData.append('description', this.product.description)
      formData.append('weight', this.product.weight)
      formData.append('price', this.product.price)
      formData.append('stock', this.product.stock)
      formData.append('discount', this.product.discount)
      console.log(formData);
      //sending data to action "storeproduct" vuex
      await this.$store
        .dispatch("admin/product/storeProduct", formData)

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
            name: "admin-products",
          });
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
  