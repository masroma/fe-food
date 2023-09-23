export default {

   // Target Deployment
   target: 'server',

   //rendering mode SSR
   ssr: true,

  loading: {
    color: 'white',	// <-- color
    height: '5px'	// <-- height
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend-ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
      },


    ],
    script: [
      { src: 'https://app.sandbox.midtrans.com/snap/snap.js', 'data-client-key': 'paste_client_Key_midtrans_disini' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    '@/assets/css/style.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-star-rating.js', mode: 'client' },
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/mixins.js' },

 ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
    '@nuxt/image',

  ],

  auth: {
    strategies: {

        //strategy "admin"
        admin: {
          scheme: 'local',
          token: {
            property: 'token',
            required: true,
            type: 'Bearer'
          },
          user: {
            property: 'user',
            // autoFetch: true
          },
          endpoints: {
            login: {
              url: '/api/admin/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: {
              url: '/api/admin/logout',
              method: 'post'
            },
            user: {
              url: '/api/admin/user',
              method: 'get',
              propertyName: 'user'
            }
          },
        },

        //strategy "customer"
        customer: {
          scheme: 'local',
          token: {
            property: 'token',
            required: true,
            type: 'Bearer'
          },
          user: {
            property: 'user',
            // autoFetch: true
          },
          endpoints: {
            login: {
              url: '/api/customer/login',
              method: 'post',
              propertyName: 'token'
            },
            logout: {
              url: '/api/customer/logout',
              method: 'post'
            },
            user: {
              url: '/api/customer/user',
              method: 'get',
              propertyName: 'user'
            }
          },
        },

    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    imageUrl: 'http://localhost:8000/storage', // Gantilah dengan URL gambar sesuai kebutuhan Anda
  },

  axios: {
    baseURL: 'http://localhost:8000'
  },
}
