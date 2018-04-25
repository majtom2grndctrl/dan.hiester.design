module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'distantlyyours-v8',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Codebase for distantlyyours.com, version 8.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i|Poppins:400,500,600"
      }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    ['nuxt-sass-resources-loader', '~/assets/main.scss']
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: ['~/assets/html.css'],
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  }
}
