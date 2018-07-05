const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Distantly Yours',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'UX Design and Consulting in Seattle, WA' },
      { name: 'application-name', content: 'Distantly Yours' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=wAO9R4Y0rn' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=wAO9R4Y0rn' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=wAO9R4Y0rn' },
      { rel: 'manifest', href:'/site.webmanifest?v=wAO9R4Y0rn' },
      { rel: 'mask-icon', href:'/safari-pinned-tab.svg?v=wAO9R4Y0rn', color: '#5bbad5' },
      { rel: 'shortcut icon', href:'/favicon.ico?v=wAO9R4Y0rn', color: '#5bbad5' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i|Poppins:400,500,600'
      }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgba(3, 161, 213, .3)' },
  modules: [
    ['nuxt-sass-resources-loader', '~/assets/main.scss'],
    '~/modules/typescript.js'
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
