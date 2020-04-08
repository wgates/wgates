
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Wes Gates | Shopify Developer San Diego',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Wes Gates, shopify plus expert and shopify expert. San Diego based shopify developer.' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@eyywes' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@eyywes' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/favicon.png'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Wes Gates - Shopify Developer'
      },
      { hid: 'og:title', name: 'og:title', content: 'Wes Gates - Shopify Developer' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Wes Gates, shopify plus expert and shopify expert. San Diego based shopify developer.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: false,
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/mvp.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
