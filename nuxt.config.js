const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')

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
  loading: { color: 'rgba(3, 161, 213, .3)' },
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
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/],
      }
      config.module.rules.push({ test: /((client|server)\.js)|(\.tsx?)$/, ...tsLoader })
      config.resolve.extensions.push('.ts')
      config.module.rules.map((rule) => {
        if (rule.loader === 'vue-loader') { rule.options.loaders = { ts: tsLoader } }
        return rule
      })
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
  generate: {
    routes: function () {
      return Prismic.getApi('https://distantly-yours-blog.cdn.prismic.io/api/v2').then( function (api) {
        return api.query(
          Prismic.Predicates.at('document.type', 'blog_post'),
          { orderings : '[my.blog_post.date desc]'}
        ).then( function (response) {
          console.log('blog_posts = ', response.results)
          const routesList = [
            {
              route: '/blog',
              payload: response.results.map( (result) => {
                return {
                  title: PrismicDOM.RichText.asText(result.data.title),
                  content: PrismicDOM.RichText.asHtml(result.data.body)
                }
              })
            }
          ]
          response.results.map((result) => {
            console.log('result = ',result)
            routesList.push({
              route: '/blog/' + result.data.slug,
              payload: {
                title: PrismicDOM.RichText.asText(result.data.title),
                content: PrismicDOM.RichText.asHtml(result.data.body)
              }
            })
          })
          console.log('routesList = ', routesList)
          return routesList
/*
          response.results.map((result) => {
            return {
              route: '/blog/' + result.data.slug,
              payload: {
                title: PrismicDOM.RichText.asText(result.data.title),
                content: PrismicDOM.RichText.asHtml(result.data.body)
              }
            }
          })
*/
        })
      })
    }
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  }
}
