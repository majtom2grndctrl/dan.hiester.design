import { blogDataMock } from './dataMocks'
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
      { hid: 'description', name: 'description', content: 'Product Design, UX Design, and Design Consulting in Seattle, WA' },
      { name: 'application-name', content: 'Distantly Yours' },
      { name: 'theme-color', content: '#197FA1' },
      { name: 'msapplication-navbutton-color', content: '#03a1d5'},
      { name: 'apple-mobile-web-app-status-bar-style', content: '#197FA1'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=wAO9R4Y0rn' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=wAO9R4Y0rn' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=wAO9R4Y0rn' },
      { rel: 'manifest', href:'/site.webmanifest?v=YAmWaLEo7o' },
      { rel: 'mask-icon', href:'/safari-pinned-tab.svg?v=wAO9R4Y0rn', color: '#5bbad5' },
      { rel: 'shortcut icon', href:'/favicon.ico?v=wAO9R4Y0rn', color: '#5bbad5' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/czd3cnh.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgba(3, 161, 213, .3)' },
  modules: [
    '@nuxtjs/style-resources'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   /*
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
  },
  styleResources: {
    sass: ['~/assets/main.scss']
  },
  css: ['~/assets/html.css'],
  generate: {
    routes: async function () {
      const apiUrl = 'https://distantly-yours-blog.cdn.prismic.io/api/v2'
      const blogQuery = await Prismic.getApi(apiUrl)
        .then( api =>  {
          return api.query(
            Prismic.Predicates.at('document.type', 'blog_post'), { orderings: '[my.blog_post.date desc]' }
          )
        })
        .catch(err => {
          console.warn('Hey, something happened to the network.', err)
          // If we’re in dev mode, return a data mock. Otherwise, return null and force an error.
          return process.env.NODE_ENV === 'development' ? { blogDataMock } : { results: [] }
        })
      console.log('blogQuery = ', blogQuery)
      const portfolioQuery = await Prismic.getApi(apiUrl)
        .then( api => { 
          return api.query(
            Prismic.Predicates.at('document.type', 'case_study'), null 
          )
        }).catch(err => {
          console.warn('Hey, something happened to the network.', err)
          // If we’re in dev mode, return a data mock. Otherwise, return null and force an error.
          return process.env.NODE_ENV === 'development' ? { results: [] } : null
        })
      console.log('portfolioQuery = ', portfolioQuery)
      const routesList = [
        {
          route: '/blog',
          payload: blogQuery.results.map((result) => {
            return {
              title: PrismicDOM.RichText.asText(result.data.title),
              content: PrismicDOM.RichText.asHtml(result.data.body),
              slug: result.uid,
              url: '/blog/' + result.uid
            }
          })
        }
      ]
      blogQuery.results.map( result => {
        console.log('result = ', result);
        routesList.push({
          route: '/blog/' + result.uid,
          payload: {
            title: PrismicDOM.RichText.asText(result.data.title),
            content: PrismicDOM.RichText.asHtml(result.data.body),
            slug: result.uid,
            url: '/blog/' + result.uid,
            cta: result.cta,
            indexBgColor: result.data.index_page_background_color,
          }
        })
      })
      portfolioQuery.results.map( result => {
        console.log('case study: ', result)
        routesList.push({
          route: '/portfolio/' + result.uid,
          payload: {
            data: result.data
          }
        })
      })
      console.log('routesList = ', routesList)
      return routesList
    }
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  }
}
